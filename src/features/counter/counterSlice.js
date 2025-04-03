import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        }
    }
});

// both actions need to be exported
export const { increment, decrement } = counterSlice.actions;
// store will need full reducer
export default counterSlice.reducer;