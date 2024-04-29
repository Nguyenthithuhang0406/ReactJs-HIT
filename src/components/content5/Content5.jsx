/* eslint-disable */
import React from 'react'

import "./Content5.scss";
import { useNavigate } from 'react-router-dom';

const Content5 = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  }
  return (
      <div className='content5'>
          <p className='tt5'><b>Ready to get started? Sign up now!</b></p>
          <button className='btn5' onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Content5;