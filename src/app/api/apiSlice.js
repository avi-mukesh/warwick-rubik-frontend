import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    // baseUrl: "https://warwick-rubik-backend.onrender.com", // for production
    credentials: "include",
})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["Event", "News"],
    endpoints: (builder) => ({}),
})
