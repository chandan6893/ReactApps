import React,{useEffect, useState} from 'react';

export function TitleChange() {
    const [titleChange,setTitleChange] = useState(0);

    console.log(titleChange)
    const handleTitle = () =>{
        setTitleChange((prev)=> prev + 1)
    }
    useEffect(()=>{
        console.log("useEffect")
        document.title=titleChange;
    },[ ])
  return (
    <>
    
            <h1>Title:::{titleChange}</h1>
            <button onClick={handleTitle} >Change the Title</button>

    </>
  )
}

