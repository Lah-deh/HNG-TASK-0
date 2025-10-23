import React from 'react'
import '../Styles/footer.scss'
import { NavLink } from 'react-router-dom'
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='foot'>
      <NavLink to="/" className="icon">
        <FaHome className='arrr' />
      </NavLink>
      <NavLink to="/about" className="icon">
        <FaUser className='arrr'/>
      </NavLink>
      <NavLink to="/contact" className="icon">
        <FaEnvelope className='arrr'/>
      </NavLink>
    </footer>
  )
}

export default Footer
