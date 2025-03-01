import React, { useState } from "react";
import "./button.css";

function Button() {
  const [color, setColor] = useState("default"); 

  function handleChangeColor(event) {
    const value = event.target.value.trim().toLowerCase();
    const validColors = ["default","primary", "secondary", "success", "danger"];
    
    if (validColors.includes(value)) {
        setColor(value);
    } else {
        setColor("default"); 
    }
}


  return (
  
    <div>
      <span> Nhập vào primary, secondary, danger, success để thay đổi màu </span>
      <input onChange={handleChangeColor} type="text" placeholder="Input color button" />
      <br />
      <button className={`button ${color}`}>
        Click to change
      </button>
    </div>
  );
}

export default Button;
