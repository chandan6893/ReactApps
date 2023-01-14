import React from 'react';
import { useGlobalContext } from './Context';

function Search() {
  const {query,setQuery} = useGlobalContext();
  return (
    <section>
      <form onSubmit={(e)=>e.preventDefault()}>
        <div>
          <input type="text" placeholder='Search here' value={query} onChange={(e)=>setQuery(e.target.value)} />
        </div>
      </form>
    </section>
  )
}

export default Search