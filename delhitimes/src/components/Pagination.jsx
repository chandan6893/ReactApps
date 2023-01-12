import React from 'react'
import { useGlobalContext } from './Context'

function Pagination() {
    const {page,nbPages,getPrevPage,getNextPage} = useGlobalContext();
  return (
    <>
      <div className="pagination-btn">
        <button className='prev btn' onClick={() => getPrevPage()}>PREV</button>
        <span className='pageNum' >{ page + 1 } of  { nbPages }</span>
        <button className='next btn' onClick={() => getNextPage()}>NEXT</button>
      </div>
    </>
  );
}

export default Pagination