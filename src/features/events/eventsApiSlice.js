import { createEntityAdapter } from "@reduxjs/toolkit"
import { apiSlice } from "../../app/api/apiSlice"

const eventsAdapter = createEntityAdapter({})

const initialState = eventsAdapter.getInitialState()

export const eventsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getEvents: builder.query({
            query: () => ({
                url: "/events",
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (responseData) => {
                const loadedEvents = responseData.map((event) => {
                    event.id = event._id
                    return event
                })
                return eventsAdapter.setAll(initialState, loadedEvents)
            },
        }),
    }),
})

export const { useGetEventsQuery } = eventsApiSlice
