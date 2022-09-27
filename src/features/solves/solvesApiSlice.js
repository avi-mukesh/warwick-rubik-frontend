import { createEntityAdapter } from "@reduxjs/toolkit"
import { apiSlice } from "../../app/api/apiSlice"

const solvesAdapter = createEntityAdapter({})

const initialState = solvesAdapter.getInitialState()

export const solvesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSolves: builder.query({
            query: () => ({
                url: "/solves",
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (responseData) => {
                const loadedSolves = responseData.map((solve) => {
                    solve.id = solve._id
                    return solve
                })
                return solvesAdapter.setAll(initialState, loadedSolves)
            },
        }),
    }),
})

export const { useGetSolvesQuery } = solvesApiSlice
