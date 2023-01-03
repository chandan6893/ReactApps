import React, { useContext } from 'react';
import { NewsContext } from "../contexts/NewsContext";

function Header() {
// const [search,setSearch] = useState([]);
const {handleChange,handleClick,search} = useContext(NewsContext);
// const handleSearch = (e) =>{
//   console.log(e.target.value);
//   setSearch(e.target.value);
// }
  return (
    <div>
      <div className="nav">
        <ul className="headlinesAndSearch">
          <li className="indiaTomorrow">
            <h2>INDIA TODAY</h2>
          </li>
        </ul>

        <ul className="tabs">
          {/* <li className="tabMR">Headlines</li>
          <li className="tabMR">World</li>
          <li className="tabMR">Entertainments</li>
          <li className="tabMR">Business</li> */}
        </ul>

        <ul>
          <li>
            <input value={search} onChange={(e)=>handleChange(e)} className='search' type="text" placeholder="Search...." />
            <button onClick={handleClick} className='searchIcon'><i className="fa-solid fa-magnifying-glass"></i></button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header