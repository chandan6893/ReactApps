import React,{ useContext } from 'react';
import {  context } from './components/Context';
import './App.css';
import News from './components/News';
import Header from './components/Header';

// import { useGlobalContext } from './components/Context';


function App() {
  // const fname = useContext(context);
  // const fname = useGlobalContext();
  // console.log(fname)
  return (
    <div className="App">
     <Header /> 
     <News />
     {/* {fname} */}
    </div>
  );
}

export default App;
