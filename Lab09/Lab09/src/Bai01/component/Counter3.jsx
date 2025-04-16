// src/components/Counter3.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../reduxToolkit/slice/CounterSlice';  

function Counter3() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value)

  return (
    <div>
      <h1>Counter3 (Redux Toolkit) - Count: {count}</h1>
      <button style={{backgroundColor:"green"}}  onClick={() => dispatch(increment())}>Tăng</button>
      <button style={{backgroundColor:"red", margin:10}}  onClick={() => dispatch(decrement())}>Giảm</button>
    </div>
  );
}

export default Counter3;
