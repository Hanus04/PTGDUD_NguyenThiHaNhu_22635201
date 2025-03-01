import React, { useState } from "react";
import "./Todolist.css"; // Import file CSS

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleAddTask() {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  }

  function handleDeleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function handleToggleComplete(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  return (
    <div className="todo-container">
      <span>Nhập vào những điều cần làm:</span>
      <br />
      <input
        type="text"
        className="todo-input"
        placeholder="Nhập công việc..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="todo-button" onClick={handleAddTask}>
        Thêm
      </button>
      <br />

      <ul className="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className={`todo-item ${task.completed ? "completed" : ""}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(index)}
            />
            <span>{task.text}</span>
            <button className="delete-button" onClick={() => handleDeleteTask(index)}>
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
