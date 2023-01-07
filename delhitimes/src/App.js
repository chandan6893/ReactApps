import React,{ useContext } from 'react';
import {  context } from './components/Context';
import './App.css';
import News from './components/News';
// import { useGlobalContext } from './components/Context';


function App() {
  // const fname = useContext(context);
  // const fname = useGlobalContext();
  // console.log(fname)
  return (
    <div className="App">
      
     <News />
     {/* {fname} */}
    </div>
  );
}

export default App;
