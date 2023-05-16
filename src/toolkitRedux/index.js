import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newsSlice from './newsSlice'

const rootReducer = combineReducers({
    newsSlice
})

export const setupStore = () => {
    return configureStore({
            reducer: rootReducer
    })
}