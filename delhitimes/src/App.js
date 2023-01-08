import React from 'react';
// import {  context } from './components/Context';
import './App.css';
import News from './components/News';
import Header from './components/Header';
import Pagination from './components/Pagination';

// import { useGlobalContext } from './components/Context';


function App() {
  // const fname = useContext(context);
  // const fname = useGlobalContext();
  // console.log(fname)
  return (
    <div className="App">
     <Header /> 
     <News />
     <Pagination />
     {/* {fname} */}
    </div>
  );
}

export default App;
