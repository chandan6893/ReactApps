import React,{useState} from 'react';
import { useGlobalContext } from "./AppContextProvider";
import "../styles/Wishlist.css";

const WishList = () => {
  
  
const { favourates, removeFun } = useGlobalContext();
// console.log("fav", favourates);


  
  

  return (
    <div className="BookList">
      {favourates.map((favBook) => {
        return (
          <div key={favBook.id} className="Booklist_book_card">
            <h1>{favBook.title}</h1>
            <img
              className="Booklist_book_image"
              src={favBook.image_url}
              alt="image not found"
            />
           <button className="BookList_Wishlit_BTN" onClick={() => removeFun(favBook.id)}>
              Remove from Wishlist
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default WishList