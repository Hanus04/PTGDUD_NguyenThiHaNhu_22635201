import React from "react"
import { useState } from "react"
function BaiTap(){
    const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(0);

  function handleChangeA(e){
     setA(Number( e.target.value));
  }
  function handleChangeB(e){
    setB(Number( e.target.value));
  }

  function handleChangeOperator(e){
    setOperator(e.target.value);
  }
  function handleClick(){
    let res =0;
    switch(operator){
      case '+':
        res = a+ b;
        break;
      case '-':
        res = a-b;
        break;
      case '*':
        res = a*b;
        break;
      case '/':
        res = a/b;
        break;  
      default:
        res = 0;
    }
    setResult(res);
  }

  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>
      <input onChange={handleChangeA} placeholder="Input A" type="text" />
      <br />
      <input onChange={handleChangeB} placeholder="Input B" type="text" />
      <br />
      <div className="radio-group">
        <input onChange={handleChangeOperator} type="radio" name="group" value="+" defaultChecked />
        <span>+</span>
        <input onChange={handleChangeOperator} type="radio" name="group" value="-" />
        <span>-</span>
        <input onChange={handleChangeOperator} type="radio" name="group" value="*" />
        <span>*</span>
        <input onChange={handleChangeOperator} type="radio" name="group" value="/" />
        <span>/</span>
      </div>
      <br />
      <button onClick={handleClick}>Calculate</button>
      <br />
      <span className="result">Result: {result}</span>
    </div>
  );
}
export default BaiTap