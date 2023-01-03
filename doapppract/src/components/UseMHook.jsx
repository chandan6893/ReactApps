
import React, { useMemo, useState } from "react";

export default function UseMHook() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  function increment() {
    setCountOne(countOne + 1);
  }

  const isEven = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return countOne % 2 === 0;
  }, [countOne]);

  console.log("ONE", countOne);
  console.log("TWO", countTwo);
  return (
    <div className="App">
      <p>{isEven ? "even" : "odd"}</p>
      <h1>countOne : {countOne}</h1>
      <h2>countTwo : {countTwo}</h2>

      <button onClick={increment}>CountOne</button>
      <button onClick={() => setCountTwo(countTwo + 1)}>CountTwo</button>
    </div>
  );
}
