import { configureStore } from '@reduxjs/toolkit'
// import MainPage from '../slices/MainPage'
import { API } from '../slices/API'

export const store = configureStore({
    reducer: {
        // MainPage: MainPage,
        [API.reducerPath]: API.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(API.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch