import React, { useState } from "react";

export default function ToDo() {
  const [task, setTask] = useState("");
  const [showTask, setShowTask] = useState([]);
  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setShowTask([...showTask, task]);
          setTask("");
        }}
      >
        Add task
      </button>
      <ul>
        {showTask.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
