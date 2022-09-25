import { createEntityAdapter } from "@reduxjs/toolkit"
import { apiSlice } from "../../app/api/apiSlice"

const newsAdapter = createEntityAdapter({})

const initialState = newsAdapter.getInitialState()

export const newsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getNews: builder.query({
            query: () => ({
                url: "/news",
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            transformResponse: (responseData) => {
                const loadedNews = responseData.map((newsItem) => {
                    newsItem.id = newsItem._id
                    return newsItem
                })
                return newsAdapter.setAll(initialState, loadedNews)
            },
        }),
    }),
})

export const { useGetNewsQuery } = newsApiSlice
