import { useState } from 'react';
import './App.css'

function App() {

  const [enterItem,setEnterItem] = useState("");
  const [data,setData] = useState([])
  
  


const handleAddItems =()=>{
  if (enterItem.length !== 0) {
    setData([...data, enterItem]);
  }
  setEnterItem("");
};
  return (
    
      <div className="App">
        <div className='inputAndAddBtn'>
          <input type="text" placeholder='Add Items' value={enterItem} onChange={(e)=>setEnterItem(e.target.value)} />
          <button onClick={handleAddItems} >Add</button>
        </div>
        <div className='mapContainer' >
          {data.map((item,i)=>{
            return (
              <div className="itemEditSave" key={i}>
                <h3>{item}</h3>
                <div className='editNdSaveBtn'>
                  <button id='editBtn'>Edit</button>
                  <button id='saveBtn'>Save</button>
                  <button id='deleteBtn'>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    
  );
}

export default App
