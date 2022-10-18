// useMemo()
import React, {useState, useMemo } from "react";

export function MemoCounter(){
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () =>{
        setCounterOne((prevCounterOne) => prevCounterOne + 1);    
    }

    const incrementTwo = () =>{
        setCounterTwo(counterTwo + 1);
    }

    // const isEven = () =>{
    //     return counterOne % 2 === 0;
    // };

    const isEven = useMemo(()=> {
        let i = 0;
        while(i < 20000000) i++;
        return counterOne % 2 === 0;
    }, [counterOne])


    return(
        <>
        <div>
            <button onClick={incrementOne}>COUNTERONE :::: {counterOne}</button>
            {isEven ? <span>Even</span> : <span>Odd</span>}
        </div>

        <div>
            <button onClick={incrementTwo}>CounterTWO :::: {counterTwo}</button>
            
        </div>
        </>
    )
}