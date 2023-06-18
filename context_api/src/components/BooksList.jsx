import React from 'react';
import { useGlobalContext } from './AppContextProvider';
import "../styles/Booklist.css";

const BooksList = () => {
  const { books, setAddToWishlist } = useGlobalContext();
  return (
    <div className='BookList'>{books.map((book)=>{
      return (
        <div key={book.id} className='Booklist_book_card'>
          <h1>{book.title}</h1>
          <img className='Booklist_book_image' src={book.image_url} alt="image not found" />
          <button className='BookList_Wishlit_BTN' onClick={()=>setAddToWishlist(book)}>Add To Wishlist</button>
        </div>
      );
    })}</div>
  )
}

export default BooksList