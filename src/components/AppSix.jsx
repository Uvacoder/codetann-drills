import React, { useState } from "react";

export default function AppSix() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    setTodos((prevState) => [...prevState, value]);
    setValue("");
  };

  const handleChange = (e) => setValue(e.target.value);

  return (
    <div>
      <h1>My to-do list:</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          placeholder="Enter new task"
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
      {todos.map((todo, i) => (
        <p key={`${todo}/${i}`}>{todo}</p>
      ))}
    </div>
  );
}
