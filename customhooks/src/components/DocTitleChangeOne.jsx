import React, { useState } from "react";
import { useUpdateTitle } from "../components/hooks/useUpdateTitle";

export function DocTitleChangeOne(){
    const [count, setCount] = useState(111);
    // useUpdateTitle(count);
    // useEffect(() => {
    //     document.title = `count :: ${count}`;
    // },[count])

    useUpdateTitle(count);


    return(
        <div>
            <button onClick={() => setCount((prev) => prev + 1)}>CLICK ::: {count}</button>
        </div>
    );
}