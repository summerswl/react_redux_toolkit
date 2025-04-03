import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'

// everything imported into the store is available to the entire app through the <Provider> in index.js
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})