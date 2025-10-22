import React from 'react'
import '../Styles/footer.scss'
import { NavLink } from 'react-router-dom'
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='foot'>
      <NavLink to="/" className="icon">
        <FaHome size={24} className='arrr' />
      </NavLink>
      <NavLink to="/about" className="icon">
        <FaUser size={24} />
      </NavLink>
      <NavLink to="/contact" className="icon">
        <FaEnvelope size={24} />
      </NavLink>
    </footer>
  )
}

export default Footer
