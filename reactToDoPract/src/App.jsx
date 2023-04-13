import { useState } from 'react';
import './App.css'

function App() {

  const [enterItem,setEnterItem] = useState("");
  const [data,setData] = useState([]);
  const [state,setState] = useState(true);
  const [itemToBeEdited,setItemToBeEdited]= useState();
  
  


const handleAddItems =()=>{
  if (enterItem.length !== 0) {
    setData([...data, enterItem]);
  }
  setEnterItem("");
};

const handleEdit =(index) =>{
  setEnterItem(data[index]);
  setState(false);
  setItemToBeEdited(index)
  }

  const handleUpdate =()=>{
    data.splice(itemToBeEdited,1,enterItem);
    setEnterItem("");
    setState(true);
  }

const handleDelete = (index)=>{
  let results = data.filter((ele,ind)=>{
    return ind !== index;
  })
  setData(results);
}  
  return (
    
      <div className="App">
        <div className='inputAndAddBtn'>
          <input type="text" placeholder='Add Items' value={enterItem} onChange={(e)=>setEnterItem(e.target.value)} />
          {state ? <button onClick={handleAddItems} >Add</button> : <button onClick={handleUpdate} id='update' >Update</button>}
        </div>
        <div className='mapContainer' >
          {data.map((item,i)=>{
            return (
              <div className="itemEditSave" key={i}>
                <h3>{item}</h3>
                <div className='editNdSaveBtn'>
                  <button id='editBtn' onClick={()=>handleEdit(i)}>Edit</button>
                  <button id='deleteBtn' onClick={()=>handleDelete(i)}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    
  );
}

export default App
