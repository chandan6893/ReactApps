
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Content from "./components/Content"
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Content />} path="/about/:id" />
     </Routes>
    </>
  );
}

export default App;
