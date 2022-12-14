
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Content from "./components/Content"
import { Route, Routes } from 'react-router-dom';
import {Header} from './components/Header';
import SideBar from './components/SideBar';
import ErrorPage from './components/ErrorPage';
import New from "./components/New"

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="*" element={<SideBar />} /> */}
      </Routes>
      {/* note:- if we give path ="*" sidebar elemend will be rendered in every page i.e 
      Home,About,Contact and page is not found even then sidebar will render like Above */}
      {/* and we want to render Sidebar on only some page then we have to remove * from path and
      replace it wth it another path like home/contact like Below */}

      {/* OR  */}

      <Routes>
        <Route path="/about/*" element={<SideBar text="about" />} />
        {/* (   remove and add , /* ,after /about and observe  ) and('/*',means anything that comes
        after /about , will take us to the SideBar) */}
      </Routes>

      <Routes>
        <Route path="/contact" element={<SideBar text="contact" />} />
        {/* inside/through element we can pass props */}
      </Routes>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about">
          <Route index element={<About />} />
          {/* here index represents =>/about in line no43 and in line 45 path =":id " === path="/about:id"  */}
          <Route path=":id" element={<Content />} />
          <Route path="new" element={<New />} />
        </Route>
        {/* <Route element={<About   />} path="/about" />
            <Route element={<Content />} path="/about/:id" /> */}

        <Route element={<Contact />} path="/contact" />

        <Route path="*" element={<ErrorPage />} />
        {/* in line no 18, anything after colon(:) is dynamic, whatever we write after the : , it will render the { Content } component every time only */}
        {/* in path="/aboout/",if we write anything after about/ i.e (/) ,it will be considered as id . */}

        {/* now, inside Content page, we can access this id by using..... const {id} = useParams()... */}
      </Routes>
    </>
  );
}

export default App;
