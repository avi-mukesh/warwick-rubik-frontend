import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { apiSlice } from "./api/apiSlice"

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})

// setupListeners is a utility to enable refetchOnMount and refetchOnReconnect behaviours
// passing store.dispatch configures the listeners with recommended defaults
setupListeners(store.dispatch)
