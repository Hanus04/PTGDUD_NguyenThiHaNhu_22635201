import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import BaiTap from './component/BaiTap.jsx';
import './component/BaiTap.css';
import Button from './component/button.jsx';
import Todolist from './component/Todolist.jsx';

function App() {
  return (
    <div>
      <BaiTap />
      <br />
      <br />
      <span>Bài tập Button </span>
      <br />
      <Button />
      <br />
      <br />
      <span>Bài tập To do list </span>
      <Todolist/>
    </div>
  );
}

export default App;
