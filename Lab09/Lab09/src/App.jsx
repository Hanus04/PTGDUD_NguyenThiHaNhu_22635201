// src/App.jsx
import React from 'react';
import Counter1 from './Bai01/component/Counter1';
import Counter2 from './Bai01/component/Counter2';
import Counter3 from './Bai01/component/Counter3';
import "./App.css"

function App() {
  return (
    <div className="App">
      <h2>Counter App (useReducer, Redux, Redux Toolkit)</h2>
      <Counter1 />
      {/* <Counter2 /> */}
      <Counter3 />
    </div>
  );
}

export default App;
