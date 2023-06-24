import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import BooksList from './components/BooksList'
import { Routes,Route } from 'react-router-dom'
import WishList from './components/WishList'
import { BookDetails } from './components/BookDetails'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      
        <Routes>
          <Route path="/" element={<BooksList />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/books/BookDetails/:id" element={<BookDetails />} />
        </Routes>
     
      <Footer />
    </>
  );
}

export default App
