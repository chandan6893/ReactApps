import React, { useState } from "react";

export function Usestates() {
  const [state, setState] = useState(0);

  const handleClick = () => {
    setState((prev) => prev + 1);
  };
  return (
    <>
      <h1>COUNT :: {state}</h1>

      <button onClick={() => setState((prev) => prev + 1)}>Click Here</button>

      <button onClick={handleClick}>Click Here</button>
    </>
  );
}
