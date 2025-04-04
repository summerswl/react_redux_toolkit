/**
 * Configures and exports the Redux store for the application.
 * 
 * The store is set up with three slices of state:
 * - `counter`: Managed by `counterReducer`, handles state related to the counter feature.
 * - `posts`: Managed by `postsReducer`, handles state related to the posts feature.
 * - `users`: Managed by `usersReducer`, handles state related to the users feature.
 */
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';

// Everything imported into the store is available to the entire app through the <Provider> in index.js
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer
    }
   
})