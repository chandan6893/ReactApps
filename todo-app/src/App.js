import React, { useState } from "react";
import './App.css';

function App() {
  const [todo, setTodo] = useState("");
  const [todos,setTodos]= useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    if(todo !== ""){
      setTodos([...todos,{ id: `${todo} - ${Date.now()}`, todo }]);
    }
  }
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setTodo(e.target.value)} />
          <button type="submit">Add</button>
        </form>

        <ul className="allTodos">
          {todos.map((t) => (
            <li className="singleTodo">
              <span className="todoText">Learning React</span>
              <button>Edit</button>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
