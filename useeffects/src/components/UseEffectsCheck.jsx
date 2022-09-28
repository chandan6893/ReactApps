import React from "react";
import { useState } from "react";
import { useEffect } from "react";

 function UseEffectsCheck (){
    const [count, setCount] = useState(0);

    // const change = () =>{
    //     console.log("in change")
    //     setCount(count + 1);
    // };

    // useEffect(()=>{
    //     console.log("in Effect");
    //    let data = setInterval(change,1000);

    //    return ()=>{
    //     clearInterval(data);
    //    };
    // //    this return part is==> componentWillUnmount or cleanup
    // },[count]);

    const change= () => {
        console.log("In change");
        setCount((prev)=> prev + 1);
    };

    useEffect(() => {
        console.log("in Effect");
       let data = setInterval(change,1000);
// whenever we use setInterval,setTimeout,API call,Any DOM Changes please clear it in return Statement like below
// otherwise we will run out of memory
        return () => {
          clearInterval(data);
        };
// this return part is==> componentWillUnmount or cleanup
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