import React from "react";
import { useState } from "react";

export function ToDo() {
  const [items, setItems] = useState("");
  const [content, setContent] = useState();
  console.log(content);
  const handleClick = () => {
    setContent([content]);
  };
  return (
    <>
      <h1>contents:::{items}</h1>
      <input
        type="text"
        placeholder="add items"
        value={items}
        onChange={(e) => setItems(e.target.value)}
      />
      <button onClick={handleClick}>Add Items</button>
    </>
  );
}
