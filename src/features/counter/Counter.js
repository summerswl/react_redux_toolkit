/**
 * Counter component that displays and manages a counter value.
 * Utilizes React and Redux hooks to interact with the global state.
 * 
 * - Displays the current count from the Redux store.
 * - Provides buttons to increment and decrement the count.
 * - Allows the user to input a custom increment amount.
 * - Includes a button to add the custom increment amount to the count.
 * - Provides a reset button to reset the increment amount and counter state.
 */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from './counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);

  const handleIncrementAmountChange = (e) => setIncrementAmount(e.target.value);

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type="number"
        value={incrementAmount}
        onChange={handleIncrementAmountChange}
      />
      <div>
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
          Add Amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter