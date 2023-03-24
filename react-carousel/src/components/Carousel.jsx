import React from 'react';
import "./carousel.css";

export const Carousel = ({slides}) => {
    // console.log(slides)
  return (
    <div className="carousel">
      <i className="fa-solid fa-chevron-left fa-beat arrow arrow-left "></i>
      {slides.map((img, index) => {
        return <img src={img.src} alt={img.alt} className="slideImg" />;
      })}
      <i className="fa-solid fa-chevron-right fa-beat arrow arrow-right "></i>
      <span className='indicators'>
        {slides.map((_,index)=>{
            return <button className='indicator' key={index} onClick={null} ></button>
        })}
      </span>
    </div>
  );
}
