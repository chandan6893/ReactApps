import React from 'react';
import "../styles/searchbar.css";

export default function SearchBar() {
  return (
    <>
      <div className="searchBarContainer">
        <input className='searchInput' type="text" placeholder="Search here..." />
        <i class="fa-solid fa-magnifying-glass fa-fade searchBarIcon "></i>
      </div>
    </>
  );
}
