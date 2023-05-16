import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    news : [],
    isLoading: false,
    error: false,
}

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        getNews(state, action) {
            state.news = action.payload
            state.isLoading = false 
            state.error = ''
        },
        dataLoading(state){
            state.isLoading = true
        },
    }
})

export default newsSlice.reducer