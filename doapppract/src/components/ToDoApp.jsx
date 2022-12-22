import React, { useState } from 'react';

function ToDoApp() {
    
    const [data,setData]=useState("");
    const [item, setItem] = useState([]);

    const handleClick=()=>{
        setItem([...item,data]);
        setData("")
        // console.log(item)
    }
  return (
    <>
    
        <input type="text" value={data} onChange={(e)=>setData(e.target.value)} />
        <button onClick={handleClick} >ADD ITEM</button>
        <div>{item.map((i)=>{
            return <h1 key={Math.random(new Date())}>{i}</h1>;
        })}</div>
    
    </>
  )
}

export default ToDoApp