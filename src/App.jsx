import React from 'react'
import Card from './Pages/Card.jsx'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Card />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
  )
}

export default App
