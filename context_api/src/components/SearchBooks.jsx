import React,{useState} from 'react';
import { useGlobalContext } from "./AppContextProvider";
import { useNavigate } from "react-router-dom";
import "../styles/SearchBooks.css";
const SearchBooks = () => {
    const { books, setSearchResult, searchResult } = useGlobalContext();

    const [search,setSearch]=useState("");
    const navigate = useNavigate(); 

    const handleSearch=(inputValue)=>{
        setSearch(inputValue);

        const results = books.filter((book) => {
          return inputValue && book && book.title && book.title.toLowerCase().includes(inputValue)
        });
        setSearchResult(results);
        
   }

     // console.log(search);
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

      <div
        style={{
          position: "absolute",
          zIndex: "100",
          backgroundColor: "darkblue",
          maxWidth: "28rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          {searchResult.map((item, ind) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "10px",
                }}
                key={ind}
                onClick={() =>
                  navigate(`/books/BookDetails/${item.id}`, {
                    state: { book: item },
                  },setSearchResult([]),setSearch(""))
                }
              >
                <img src={item.image_url} height="36px" alt="" />
                <h3>{item.title}</h3>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

export default SearchBooks