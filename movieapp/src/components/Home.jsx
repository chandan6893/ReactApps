import React from 'react';
// import { useGlobalContext } from './Context';
import Movies from './Movies';
import Search from "./Search"

function Home() {
    // const name = useGlobalContext()
  return (
    <>
      <Search />
      <Movies />
    </>
  )
}

export default Home