import React, { useState } from "react";

const FOOD = ["spaghetti", "ice creame", "sushi", "bologna", "cheese"];

export default function AppThree() {
  const [filtered, setFiltered] = useState(FOOD);

  const handleChange = (e) => {
    const value = e.target.value;

    setFiltered((prevState) => {
      if (!value) return FOOD;
      return prevState.filter((item) => item.includes(value));
    });
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
      {filtered.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}
