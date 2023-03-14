import React from 'react';
import list from "../data";
import Cards from './Cards';

function LandingPage({handleClick}) {
  return (
    <section>
        {list.map((item)=>{
            return <Cards item={item} key={item.id} handleClick={handleClick} />
        })}
    </section>
  )
}

export default LandingPage