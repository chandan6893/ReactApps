import React,{ useState } from 'react';
import "../styles/searchbar.css";

export default function SearchBar({setResult}) {
    const [inputData,setInputData] = useState("");

    const fetchedData=(value)=>{
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((json) => {
            const results = json.filter((ele)=>{
                return value && ele && ele.name && ele.name.toLowerCase().includes(value);
            })
            setResult(results);

          });
    }
    const handleSearhBar =(value)=>{
        fetchedData(value);
        setInputData(value);
    }
  return (
    <>
      <div className="searchBarContainer">
        <input className='searchInput' type="text" placeholder="Search here..." value={inputData} onChange={(e)=>handleSearhBar(e.target.value)} />
        <i className="fa-solid fa-magnifying-glass fa-fade searchBarIcon " ></i>
      </div>
    </>
  );
}
