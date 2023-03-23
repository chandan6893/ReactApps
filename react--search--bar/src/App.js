import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import { SuggestionList } from './components/SuggestionList';


function App() {
  const [result,setResult] = useState([])
  return (
    <div className="App">
      <SearchBar setResult={setResult} />
      <SuggestionList result={result} /> 
    </div>
  );
}

export default App;
