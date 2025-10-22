import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Header2 = () => {
  const navigate = useNavigate();

  return (
    <div className='head'>
      <FaArrowLeft 
        className='arr' 
        onClick={() => navigate(-1)} 
        style={{ cursor: 'pointer' }} 
      />
      <h3>About me</h3>
    </div>
  )
}

export default Header2
