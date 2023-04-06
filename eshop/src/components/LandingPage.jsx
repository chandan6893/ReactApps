import React from 'react';
import list from "../data";
import Cards from './Cards';
import Categories from './Categories';
import { SingleProduct } from './SingleProduct';

import { Carousel } from "../components/Carousel";
import slides from "../data/carouselData";
import Footer from "../components/Footer";

function LandingPage({ handleClick, state, singleProd, categoryData,categoryState }) {
  return (
    <>
      {state ? (
        <SingleProduct handleClick={handleClick} singleProd={singleProd} />
      ) : (
        <div>
          <section>
            {categoryState
              ? categoryData.map((item) => {
                  return (
                    <Categories
                      categoryData={categoryData}
                      categoryState={categoryState}
                      item={item}
                      key={item.id}
                      handleClick={handleClick}
                    />
                  );
                })
              : list.map((item) => {
                  return (
                    <Cards
                      categoryData={categoryData}
                      categoryState={categoryState}
                      item={item}
                      key={item.id}
                      handleClick={handleClick}
                    />
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