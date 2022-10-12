
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
        {/* in line no 18, anything after colon(:) is dynamic, whatever we write after the : , it will render the { Content } component every time only */}
        {/* in path="/aboout/",if we write anything after about/ i.e (/) ,it will be considered as id . */}

        {/* now, inside Content page, we can access this id by using..... const {id} = useParams()... */}
      </Routes>
    </>
  );
}

export default App;
