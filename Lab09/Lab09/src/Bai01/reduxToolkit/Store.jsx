// src/reduxToolkit/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/CounterSlice'; 

const Store = configureStore({
  reducer: {
    counter: counterReducer, 
  },
});

export default Store;
