import React from "react";

import { useCounter } from "./hooks/useCounter";

export function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(99);

  return (
    <>
      <h1>COUNT:: {count}</h1>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
    </>
  );
}
