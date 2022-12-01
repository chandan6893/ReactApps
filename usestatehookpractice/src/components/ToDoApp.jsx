import React from 'react'
import { useState } from 'react';

export function ToDoApp() {
    const [items,setItems] = useState([""]);
    const [fruit,setFruit]=useState("")
    console.log(items);
    const handleClick=()=>{
            setItems([...items,fruit]);
            setFruit("")
    }


  return (
    <>
      <div className="container">
        <div className='inputAndAddBtn'>
          <input
            className="inputTag"
            type="text"
            placeholder="type something"
            value={fruit}
            onChange={(e) => setFruit(e.target.value)}
          />
          <button className="button" onClick={handleClick}>
            Add Item
          </button>
        </div>
        <p>
          {items.map((item) => {
            return (
              <div className="contents">
                <div>{item}</div>
                <button
                  className="delButton"
                  onClick={() => {
                    let filteredValue = items.filter((val) => val !== item);
                    setItems([...filteredValue]);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </p>
      </div>
    </>
  );
}

