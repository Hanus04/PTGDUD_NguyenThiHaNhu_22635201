// src/globalRedux/store.js
import { createStore } from 'redux';
import CounterReducer from './reducer/CounterUseReducer';

const Store = createStore(CounterReducer);

export default Store;
