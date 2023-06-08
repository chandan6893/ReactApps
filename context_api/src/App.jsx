import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import BooksList from './components/BooksList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <BooksList />
      <Footer />
    </>
  )
}

export default App
