import { configureStore } from '@reduxjs/toolkit'
import Profile from '../slices/Profile'
import { API } from '../slices/API'

export const store = configureStore({
    reducer: {
        Profile: Profile,
        [API.reducerPath]: API.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(API.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch