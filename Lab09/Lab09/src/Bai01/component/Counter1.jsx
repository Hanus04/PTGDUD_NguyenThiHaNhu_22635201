// src/components/Counter1.jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter1() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter1 (useReducer) - Count: {state.count}</h1>
      <button style={{backgroundColor:"green"}} onClick={() => dispatch({ type: 'increment' })}>Tăng</button>
      <button style={{backgroundColor:"red", margin:10}}  onClick={() => dispatch({ type: 'decrement' })}>Giảm</button>
    </div>
  );
}

export default Counter1;
