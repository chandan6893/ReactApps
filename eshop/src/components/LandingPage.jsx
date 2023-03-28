import React from 'react';
import list from "../data";
import Cards from './Cards';
import { SingleProduct } from './SingleProduct';


function LandingPage({handleClick,state,singleProd}) {
  return (
    <section>
      {state ? (
        <SingleProduct handleClick={handleClick} singleProd={singleProd} />
      ) : (
        list.map((item) => {
          return <Cards item={item} key={item.id} handleClick={handleClick} />;
        })
      )}
    </section>
  );
}

export default LandingPage