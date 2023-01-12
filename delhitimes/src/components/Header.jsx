import React from 'react'
import { useGlobalContext } from './Context'

function Header() {
    const {query,searchPost} = useGlobalContext();
  return (
    <div className="header">
      <h1 className="webTitle">DelhiTimes</h1>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="formDiv">
          <input
            className="input"
            type="text"
            placeholder="Search...."
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default Header