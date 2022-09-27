import { createEntityAdapter } from "@reduxjs/toolkit"
import { apiSlice } from "../../app/api/apiSlice"

const participantsAdapter = createEntityAdapter({})

const initialState = participantsAdapter.getInitialState()

export const participantsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getParticipants: builder.query({
            query: () => ({
                url: "/participants",
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (responseData) => {
                const loadedParticipants = responseData.map((participant) => {
                    participant.id = participant._id
                    return participant
                })
                return participantsAdapter.setAll(
                    initialState,
                    loadedParticipants
                )
            },
        }),
    }),
})

export const { useGetParticipantsQuery } = participantsApiSlice
