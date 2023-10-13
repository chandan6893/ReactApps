import React,{useEffect} from 'react';
import { useGlobalContext } from "./AppContextProvider";
import { useNavigate } from "react-router-dom";
import "../styles/SearchBooks.css";
const SearchBooks = () => {
    const { books, setSearchResult, searchResult, search, setSearch } =useGlobalContext();
    const navigate = useNavigate(); 

    const handleSearch=(inputValue)=>{
        setSearch(inputValue);
      if(inputValue==""){
        setSearchResult([])
      }
        const results = books.filter((book) => {
          return inputValue && book && book.title && book.title.toLowerCase().includes(inputValue)
        });
        setSearchResult(results);
        
        
   }

   const manageOutsideClick=(event)=>{
    if (!event.target.closest(".SearchBooksSearchedResultsContainer") && !event.target.closest(".SearchBooksInputTag")) {
      setSearchResult([]);
    } 
     event.stopPropagation();
   }
 useEffect(()=>{
  document.addEventListener("click",manageOutsideClick);

  return ()=>{
    document.removeEventListener("click",manageOutsideClick);
  }
 },[])


  return (
    <div style={{ width: "28rem" }}>
      <div>
        <input
          className='SearchBooksInputTag'
          value={search}
          type="text"
          placeholder="search..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className='SearchBooksSearchedResultsContainer'>
        <div>
          {searchResult.map((item, ind) => {
            return (
              <div
                className="SearchBooksSearchedResults"
                
                key={ind}
                onClick={() =>
                  navigate(
                    `/books/BookDetails/${item.id}`,
                    {
                      state: { book: item },
                    },
                    setSearchResult([]),
                    setSearch("")
                  )
                }
              >
                <img src={item.image_url} height="36px" alt="" />
                {item.title.length > 40 ? (
                  <h3 className="SearchBooksSearchedResultsTitles">
                    {item.title.substring(0,33)}....
                  </h3>
                ) : (
                  <h3 className="SearchBooksSearchedResultsTitles">
                    {item.title}
                  </h3>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default SearchBooks