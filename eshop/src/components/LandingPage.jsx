import React from 'react';
import list from "../data";
import Cards from './Cards';
import { SingleProduct } from './SingleProduct';

import { Carousel } from "../components/Carousel";
import slides from "../data/carouselData";
import Footer from "../components/Footer";

function LandingPage({handleClick,state,singleProd}) {

  
  return (
    <>
      {state ? (
        <SingleProduct handleClick={handleClick} singleProd={singleProd} />
      ) : (
        <div>
          <section>
            {list.map((item) => {
              return (
                <Cards item={item} key={item.id} handleClick={handleClick} />
              );
            })}
          </section>
          <div>
            <Carousel slides={slides} />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default LandingPage