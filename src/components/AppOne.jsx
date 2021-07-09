import React, { useState } from "react";

export default function AppOne() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>{value}</p>
    </div>
  );
}
