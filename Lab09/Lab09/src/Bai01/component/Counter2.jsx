// src/components/Counter2.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Counter2() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h1>Counter2 (Redux) - Count: {count}</h1>
      <button style={{backgroundColor:"green"}}  onClick={() => dispatch({ type: 'increment' })}>Tăng</button>
      <button style={{backgroundColor:"red", margin:10}}  onClick={() => dispatch({ type: 'decrement' })}>Giảm</button>
    </div>
  );
}

export default Counter2;
