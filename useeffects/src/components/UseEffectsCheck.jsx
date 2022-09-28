import React from "react";
import { useState } from "react";
import { useEffect } from "react";

 function UseEffectsCheck (){
    const [count, setCount] = useState(0);

    // const change =() =>{
    //     console.log("in change")
    //     setCount(count + 1);
    // };

    // useEffect(()=>{
    //     console.log("in Effect");
    //     setInterval(change,2000);
    // },[count]);

    const change= () => {
        console.log("In change");
        setCount((prev)=> prev + 1);
    };

    useEffect(() => {
        console.log("in Effect");
        setInterval(change,1000)

    },[])

    return(
        <>
        <div>
            {count}
        </div>
        </>
    )
}
export default UseEffectsCheck;