import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Product' element={<Product />} />
        </Routes>
        <Body />
        <Footer />
      </Router>
    </div>
  )
}

export default App