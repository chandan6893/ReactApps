// import React from 'react';
import { NewsContextProvider } from './contexts/NewsContext';
import News from './components/News';
import './App.css';



function App() {
  return (
    <NewsContextProvider>
      
      <News />
      
    </NewsContextProvider>
  );
}

export default App;
