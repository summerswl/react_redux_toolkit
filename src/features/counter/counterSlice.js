/**
 * Defines a Redux slice for managing a counter state.
 * 
 * The slice includes the following actions:
 * - increment: Increases the count by 1.
 * - decrement: Decreases the count by 1.
 * - reset: Resets the count to 0.
 * - incrementByAmount: Increases the count by a specified amount.
 * 
 * The initial state of the counter is set to 0.
 * Exports the actions for use in dispatching and the reducer for store configuration.
 */
import { createSlice } from '@reduxjs/toolkit';

const initialState = { count: 0 };

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => { state.count += 1; },
        decrement: state => { state.count -= 1; },
        reset: state => { state.count = 0; },
        incrementByAmount: (state, action) => { state.count += action.payload; }
    }
});

// both actions need to be exported
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
// store will need full reducer
export default counterSlice.reducer;