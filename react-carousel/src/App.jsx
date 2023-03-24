import { useState } from 'react';
import './App.css';
import { Carousel } from './components/Carousel';
import {slides} from "./data/carouselData.json"

function App() {
  
  return (
    <div className="App">
      <Carousel slides={slides} />
    </div>
  )
}

export default App
