
import './App.css';
import Counter from './components/Counter';
import ToDoApp from './components/ToDoApp';
import UseMHook from './components/UseMHook';
import Parent from './useCallBackHook/Parent';

function App() {
  return (
    <div className="App">
     <ToDoApp />
     {/* <Counter /> */}
     {/* <UseMHook /> */}
     {/* parent is for useCallbackHook */}
     {/* <Parent /> */}
    </div>
  );
}

export default App;
