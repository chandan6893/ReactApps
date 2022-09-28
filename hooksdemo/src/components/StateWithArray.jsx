import React, { useState } from "react";
export function StateWithArray(){
    const [items, setItems] = useState(["apple", "banana", "mango"]);
    const [fruit, setFruit] =useState([""])

    const addItems = () => {
                            //  const newItem = "ORANGE";
                             setItems([...items,fruit]);
                             setFruit("");
                           }


    return (
      <>
        <input
          type="text"
          value={fruit}
          onChange={(e) => setFruit(e.target.value)}
          placeholder={"Add Fruit"}
        />
        <button onClick={addItems}>ADD ITEMS</button>
        <div>
          {items.map((item) => (
            <div>
              <span>{item}</span>

              <button>EDIT</button>

              <button
                onClick={() => {
                  let filteredItems = items.filter((value) => value !== item);
                  setItems([...filteredItems]);
                }}
              >
                DELETE
              </button>
            </div>
          ))}
        </div>
      </>
    );
}
