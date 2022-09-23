import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

export const store = configureStore({})

// setupListeners is a utility to enable refetchOnMount and refetchOnReconnect behaviours
// passing store.dispatch configures the listeners with recommended defaults
setupListeners(store.dispatch)
