
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <form className="todoForm">
          <input type="text" />
          <button>Add</button>
        </form>

        <ul>
          <li>
            <span>Learning React</span>
            <button>Edit</button>
            <button>Delete</button>
          </li>

          <li>
            <span>Learning React</span>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
