import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';
import Error from './components/Error';

function App() {
  return (
    <>
     
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path='movie/:id' element={<SingleMovie />} />
          <Route path='*' element={<Error />} />
        </Routes>
     
    </>
  );
}

export default App;
