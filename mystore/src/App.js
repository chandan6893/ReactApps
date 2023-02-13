// import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home"
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
