import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query'


interface LoginResponse {
    refresh: string,
    access: string,
}

export interface LoginParams {
    email: string,
    password: string,
}


const baseQueryWithoutReauth = fetchBaseQuery({ baseUrl: 'http://bridge.sytes.net/api/v1/' })

const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    const accessToken = localStorage.getItem('accessToken');
    if (typeof args !== 'string') {
        args.headers = {
            ...args.headers,
            'Authorization': `Bearer ${accessToken}`,
        };
    }
    let result = await baseQueryWithoutReauth(args, api, extraOptions)
    if (result.error && result.error.status === 401) {
        // get refresh token from localStorage
        const refreshToken = localStorage.getItem('refreshToken');
        // try to get a new token
        const refreshResult = await baseQueryWithoutReauth({
            url: 'auth/jwt/refresh/',
            method: 'POST',
            body: {
                refresh: refreshToken,
            },
        }, api, extraOptions)
        if (refreshResult.data) {
            // store the new tokens
            localStorage.setItem('accessToken', (refreshResult.data as LoginResponse).access);
            localStorage.setItem('refreshToken', (refreshResult.data as LoginResponse).refresh);
            // retry the initial query
            result = await baseQueryWithoutReauth(args, api, extraOptions)
        } else {
            // The refresh token has expired, user must log in again
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            window.location.href = '/sign-in';
        }
    }
    return result
}

// Define a service using a base URL and expected endpoints
export const API = createApi({
    reducerPath: 'API',
    baseQuery: (args, api, extraOptions) => {
        // Проверяем, содержит ли URL строку 'auth/jwt/create/'
        if (args.url && args.url === 'auth/jwt/create/') {
            return baseQueryWithoutReauth(args, api, extraOptions);
        } else {
            return baseQueryWithReauth(args as string | FetchArgs, api, extraOptions);
        }
    },
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginParams>({
            query: (params) => ({
                url: 'auth/jwt/create/',
                method: 'POST',
                body: params
            }),
        }),
    }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation } = API
