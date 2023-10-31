import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import User from 'types/IUser';
import IVacancy from 'types/IVacancy';
import ICandidate from 'types/ICandidate';


interface LoginResponse {
    refresh: string,
    access: string,
}

export interface LoginParams {
    email: string,
    password: string,
}

interface GetVacancyResponse {
    count: number,
    next: string,
    previous: string,
    results: IVacancy[],
}

interface ResultResponse {
    count: number,
    next: string,
    previous: null,
    results: ICandidate[],
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
            // retry the initial query
            if (typeof args !== 'string') {
                result = await baseQueryWithoutReauth({ ...args, headers: { ...args.headers, 'Authorization': `Bearer ${(refreshResult.data as LoginResponse).access}` } }, api, extraOptions)
            }
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
        getUser: builder.query<User, void>({
            query: () => ({ url: 'users/me/' }),
        }),
        getVacancy: builder.query<GetVacancyResponse, void>({
            query: () => ({ url: 'vacancy' }),
        }),
        getCandidates: builder.query<ResultResponse, void>({
            query: () => ({ url: 'candidates/' }),
        }),
        addToFavorite: builder.mutation<ICandidate, string>({
            query: (id) => ({
                url: `candidates/${id}/favorite/`,
                method: 'POST',
            }),
        }),
        removeFromFavorite: builder.mutation<ICandidate, string>({
            query: (id) => ({
                url: `candidates/${id}/favorite/`,
                method: 'DELETE',
            }),
        }),
    }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useGetUserQuery, useGetVacancyQuery, useGetCandidatesQuery, useAddToFavoriteMutation, useRemoveFromFavoriteMutation } = API
