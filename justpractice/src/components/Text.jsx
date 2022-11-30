import React, { useState } from "react";

export function Text() {
  const [text, setText] = useState("hello");
  return (
    <>
      <h1>Sentence::::{text}</h1>
      <input
        type="text"
        value={text}
        placeholder="Write Something"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setText("Good Going")}>AddText</button>
    </>
  );
}
