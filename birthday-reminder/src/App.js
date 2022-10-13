
import React, { useState } from "react"; 
import './App.css';
import { List } from "./components/List";
import  Data  from "./components/Data";



function App() {

  const [people, setPeople] = useState(Data);
  return (
    <>
      <div className="parent-container">
        <div className="container">
          <h2>BirthDays Today</h2>
          <List people={people} />
          <button onClick={()=> setPeople([])} >Clear All</button>
        </div>
      </div>
    </>
  );
}

export default App;
