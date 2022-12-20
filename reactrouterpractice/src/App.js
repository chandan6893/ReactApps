
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Product from './components/Product';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<Product />} />
         </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
