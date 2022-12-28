import React, { useState } from 'react';

function ToDoApp() {
    
    const [data,setData]=useState("");
    const [item, setItem] = useState([]);

    const handleClick=()=>{
        if(data.length!==0){
          setItem([...item, data]);
        };
        // console.log(item)
        setData("")
        // console.log(item)
    }
    function handleDelete(index){
      // console.log(index)
      const updatedItems = item.filter((element,ind)=>{
      return index !== ind;
        
      }) 
     setItem(updatedItems);
    }

    const handleEdit=(index)=>{
      setData(item[index]);
    }

    function delAll(){
      setItem([])
    }
  return (
    <>
    
        <input type="text" value={data} onChange={(e)=>setData(e.target.value)} />
        <button onClick={handleClick} >ADD ITEM</button>
        <div>{item.map((element,index)=>{
            return (
              <div key={index}>
                <h1>{element}</h1>
                <button onClick={()=>handleDelete(index)} >Delete</button>
                <button onClick={()=>handleEdit(index)} >Edit</button>
              </div>
            );
        })}</div>
    
         {item.length>=2 && <button onClick={delAll} >Delete All</button> }

    </>
  )
}

export default ToDoApp