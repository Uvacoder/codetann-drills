import React from "react";

const FOOD = ["spaghetti", "ice creame", "sushi", "bologna", "cheese"];

export default function AppTwo() {
  return (
    <div>
      {FOOD.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}
