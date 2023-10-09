import React,{useState} from 'react';
import { useGlobalContext } from './AppContextProvider';
import "../styles/Booklist.css";
import { useNavigate } from 'react-router-dom';
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";

const BooksList = () => {
  const { books, fav, searchResult } = useGlobalContext();
  const navigate=useNavigate(); 

  const perPageRecords=8;
  const totalPageRecords=books.length;
  const totalPages=Math.ceil(totalPageRecords/perPageRecords)
 
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
  return (
    <>
      {books.length > 0 ? (
        <div style={{  position: "relative",zIndex:"10" }}>
          

          <div className="BookList">
            {(() => {
              const displayPosts = [];

              books.slice(startPageIndex,endPageIndex+1).map((book,ind)=>{

                displayPosts.push(
                  <div key={ind} className="Booklist_book_card">
                    <h1>{book.title}</h1>
                    <img
                      className="Booklist_book_image"
                      src={book.image_url}
                      alt="image not found"
                      onClick={() =>
                        navigate(`/books/BookDetails/${book.id}`, {
                          state: { book: book },
                        })
                      }
                    />
                    <button
                      className="BookList_Wishlit_BTN"
                      onClick={() => fav(book)}
                    >
                      Add To Wishlist
                    </button>
                  </div>
                );

              })
             
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
        // <div style={{height:"80vh",textAlign:"center"}}>
        //   <h1 style={{textAlign:"center",fontSize:"80px",marginTop:"200px"}} >Loading......</h1>
        // </div>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            {/* <CircularProgress /> */}
            <img src="https://i.gifer.com/WMDx.gif" style={{width:"200px"}} alt="" />
          </div>
        </div>
      )}
    </>
  );
}

export default BooksList