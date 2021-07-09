import React, { useRef } from "react";

export default function AppFour() {
  const userRef = useRef(null);
  const passwordRef = useRef(null);

  const handleClick = () => {
    alert(
      `Username: ${userRef.current.value} Password: ${passwordRef.current.value}`
    );
  };
  return (
    <div>
      <input ref={userRef} type="text" />
      <input ref={passwordRef} type="text" />
      <button onClick={handleClick}>Login</button>
    </div>
  );
}
