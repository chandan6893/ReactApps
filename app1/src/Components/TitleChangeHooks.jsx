import React, { useState , useEffect} from "react";
export function TitleChangeHooks(){
   const [count, setCount] = useState(0);
   const [name, setName]   = useState();

   useEffect(() =>{
    console.log("count Changed")
    document.title = `${count} times clicked`;

    // for the first time load (first rendering) useEffect wiil get called.

    // FOR EACH RE-RENDERING PROCESS useEffect() get called.  
   },[count]);

   useEffect(()=>{
    console.log("name Changed")
   },[name])

   return(
    <>
    <div className="titleChangeHooks">
        <input type="text" value={name} onChange = {(e)=>setName(e.target.value)} />
        <h3>Count : {count}</h3>
        <button onClick={()=> setCount(count + 1)}>Click Here Hooks</button>
    </div>
    </>
   );
}