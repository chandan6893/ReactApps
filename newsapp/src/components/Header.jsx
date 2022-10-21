import React from 'react';

function Header() {
  return (
    <div>
      <div className="nav">
        <ul className="headlinesAndSearch">
          <li className="indiaTomorrow">
            <h2>INDIA TODAY</h2>
          </li>
        </ul>

        <ul className="tabs">
          <li className="tabMR">Headlines</li>
          <li className="tabMR">World</li>
          <li className="tabMR">Entertainments</li>
          <li className="tabMR">Business</li>
        </ul>

        <ul>
          <li>
            <input className='search' type="text" placeholder="Search...." />
            <button className='searchIcon'><i class="fa-solid fa-magnifying-glass"></i></button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header