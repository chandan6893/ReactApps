import React, { useState , useEffect} from "react";
export function TitleChangeHooks(){
   const [count, setCount] = useState(0);
   useEffect(() =>{
    document.title = `${count} times clicked`;
   });

   return(
    <>
    <div className="titleChangeHooks">
        <h3>Count : {count}</h3>
        <button onClick={()=> setCount(count + 1)}>Click Here Hooks</button>
    </div>
    </>
   );
}