import { useState } from 'react';
import './App.css'

function App() {

  const [enterItem,setEnterItem] = useState("");
  const [data,setData] = useState([])
  
const handleAddItems =()=>{
  if(enterItem.length !==0 ){
    setData([...data, enterItem]);
  }
  setEnterItem(" ");
}
console.log("DATA==>",data,enterItem.length)
  return (
    
      <div className="App">
        <div className='inputAndAddBtn'>
          <input type="text" placeholder="Add Items..." value={enterItem} onChange={(e)=>setEnterItem(e.target.value)} />
          <button onClick={handleAddItems} >Add</button>
        </div>
      </div>
    
  );
}

export default App
