import React from 'react';
import { useLocation } from 'react-router-dom';
import "../styles/BookDetails.css";
import { useGlobalContext } from "./AppContextProvider";

export const BookDetails = () => {
  const { fav } = useGlobalContext();
  const location=useLocation();
  // console.log(location.state.book)
  return (
    <div className="bookDetails">
      <div className="bookDetails_Content_Container">
        <div className="bookDetails_ImageContainer">
          <img
            className="bookDetailsImage"
            src={location.state.book.image_url}
            alt="Image Not Found"
          />
          <button
            className="BookList_Wishlit_BTN"
            onClick={() => fav(location.state.book)}
          >
            Add To Wishlist
          </button>
        </div>
        <div className="bookDetails_Details">
          <h3 className="bookDetails_Title">{location.state.book.title}</h3>
          <h4 className="bookDetails_Genres">{location.state.book.genres}</h4>
          <p className="bookDetails_Description">
            {location.state.book.description}
          </p>
          <h3 className="bookDetails_Rating">{location.state.book.rating}</h3>
        </div>
      </div>
    </div>
  );
}
