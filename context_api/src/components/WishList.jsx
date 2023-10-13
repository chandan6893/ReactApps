import React from 'react';
import { useGlobalContext } from "./AppContextProvider";
import "../styles/Wishlist.css";

const WishList = () => {
  
  
const { favourates, removeFun } = useGlobalContext();
// console.log("fav", favourates);

return (
  <>
    {favourates.length > 0 ? (
      <div style={{ marginBottom: "600px" }} className="BookList">
        {favourates.map((favBook) => {
          return (
            <div key={favBook.id} className="Booklist_book_card">
              <h1>{favBook.title}</h1>
              <img
                className="Booklist_book_image"
                src={favBook.image_url}
                alt="image not found"
              />
              <button
                className="BookList_Wishlit_BTN"
                onClick={() => removeFun(favBook.id)}
              >
                Remove from Wishlist
              </button>
            </div>
          );
        })}
      </div>
    ) : (
      <div className="WishListNotAnyBook">
        <p>There IS Not Any Book In Your WishList.</p>
        <p>Please Add....</p>
      </div>
    )}
  </>
);
}

export default WishList