import React,{ useState } from 'react';
import "./carousel.css";

export const Carousel = ({slides}) => {
    const [slideImg,setSlideImg] = useState(0);
    const prevSlide = ()=>{
        setSlideImg(slideImg === 0 ? slides.length-1 : slideImg-1);
    }

    const nextSlide = () =>{
        setSlideImg(slideImg===slides.length-1 ? 0 : slideImg+1)
    }
    // console.log(slides)
  return (
    <div className="carousel">
      <i className="fa-solid fa-chevron-left fa-beat arrow arrow-left " onClick={prevSlide}></i>
      {slides.map((img, index) => {
        return <img src={img.src} alt={img.alt} className={slideImg === index ? "slideImg" :"slide-hidden"} />;
      })}
      <i className="fa-solid fa-chevron-right fa-beat arrow arrow-right " onClick={nextSlide}></i>
      <span className='indicators'>
        {slides.map((_,index)=>{
            return <button className={slideImg === index ? "indicator" : "indicator indicator-inactive"} key={index} onClick={()=>setSlideImg(index)} ></button>
        })}
      </span>
    </div>
  );
} 
