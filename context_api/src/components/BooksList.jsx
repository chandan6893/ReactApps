import React,{useState} from 'react';
import { useGlobalContext } from './AppContextProvider';
import "../styles/Booklist.css";
import { useNavigate } from 'react-router-dom';
import Pagination from "@mui/material/Pagination";

const BooksList = () => {
  const { books,fav } = useGlobalContext();
  const navigate=useNavigate(); 

  const perPageRecords=8;
  const totalPageRecords=books.length;
  const totalPages=Math.ceil(totalPageRecords/perPageRecords)
  // console.log(books)
  // console.log(totalPageRecords)
  const [startPageIndex,setStartPageIndex]=useState(0);
  const [endPageIndex, setEndPageIndex] = useState(perPageRecords-1);
  const [currentPage,setCurrentPage]=useState(1);
      
  const displayPage=(pageNo)=>{
    setCurrentPage(pageNo);
    let start_page_index=perPageRecords*pageNo-perPageRecords;
    let end_page_index=perPageRecords*pageNo-1;
    setStartPageIndex(start_page_index);
    if(end_page_index>totalPageRecords){
      setEndPageIndex(totalPageRecords-1);
    }else{
      setEndPageIndex(end_page_index);
    }
  }
     
  // for(let i=startPageIndex;i<=endPageIndex;i++){
  //   if(books.length>0){
  //     console.log(books[i].id);
  //   }
  // }
  return (
    // <div className='BookList'>{books.map((book,i)=>{
    //   return (
    //     <div key={i} className='Booklist_book_card'>
    //       <h1>{book.title}</h1>
    //       <img className='Booklist_book_image' src={book.image_url} alt="image not found" onClick={()=>navigate(`/books/BookDetails/${book.id}`,{state:{book:book}})} />
    //       <button className='BookList_Wishlit_BTN' onClick={()=>fav(book)} >Add To Wishlist</button>
    //     </div>
    //   );
    // })}</div>
    <>
      {books.length > 0 ? (
        <div >
          <div className="BookList">
            {(() => {
              const displayPosts = [];
              for (let i = startPageIndex; i <= endPageIndex; i++) {
                displayPosts.push(
                  <div key={i} className="Booklist_book_card">
                    <h1>{books[i]?.title}</h1>
                    <img
                      className="Booklist_book_image"
                      src={books[i]?.image_url}
                      alt="image not found"
                      onClick={() =>
                        navigate(`/books/BookDetails/${books[i].id}`, {
                          state: { book: books[i] },
                        })
                      }
                    />
                    <button
                      className="BookList_Wishlit_BTN"
                      onClick={() => fav(books[i])}
                    >
                      Add To Wishlist
                    </button>
                  </div>
                );
              }
              return displayPosts;
            })()}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "25px",
            }}
          >
            <Pagination
              count={totalPages}
              color="primary"
              onChange={(event, value) => displayPage(value)}
            />
          </div>
        </div>
      ) : (
        "Loading...."
      )}
    </>
  );
}

export default BooksList