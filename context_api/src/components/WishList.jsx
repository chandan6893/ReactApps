import React,{useState} from 'react';
import { useGlobalContext } from "./AppContextProvider";

const WishList = () => {
  
  
const { wishlist } =useGlobalContext();
// console.log(wishlist[0].title)
  
  

  return (
    <div>
      <div>
        {/* <img src={wishlist.image_url} alt="" /> */}
        {/* {wishlist.map((ele, i) => {
          console.log(ele.title)
        })} */}
      </div>
    </div>
  );
}

export default WishList