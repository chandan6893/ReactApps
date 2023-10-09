import React,{useState} from 'react';
import { useGlobalContext } from "./AppContextProvider";
import { useNavigate } from "react-router-dom";

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
    <div style={{ width: "25rem" }}>
      <div>
        <input
          style={{ width: "25rem" ,height:"2rem", padding:"0 10px 0 20px" }}
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
          width:"25rem",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
      >
        {searchResult.length > 0 ? (
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
                >
                  <img
                    src={item.image_url}
                    height="36px"
                    alt=""
                    onClick={() =>
                      navigate(`/books/BookDetails/${item.id}`, {
                        state: { book: item },
                      })
                    }
                  />
                  <h3>{item.title}</h3>
                </div>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default SearchBooks