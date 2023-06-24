import React from 'react';
import { useGlobalContext } from './AppContextProvider';
import "../styles/Booklist.css";
import { useNavigate } from 'react-router-dom';

const BooksList = () => {
  const { books,fav } = useGlobalContext();
  const navigate=useNavigate(); 
      
     
  
  return (
    <div className='BookList'>{books.map((book,i)=>{
      return (
        <div key={i} className='Booklist_book_card'>
          <h1>{book.title}</h1>
          <img className='Booklist_book_image' src={book.image_url} alt="image not found" onClick={()=>navigate(`/books/BookDetails/${book.id}`,{state:{book:book}})} />
          <button className='BookList_Wishlit_BTN' onClick={()=>fav(book)} >Add To Wishlist</button>
        </div>
      );
    })}</div>
  )
}

export default BooksList