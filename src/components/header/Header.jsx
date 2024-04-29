/* eslint-disable */
import React from 'react';

import avataIcon from "../../assets/images/avataIcon.jpg";

import "./Header.scss";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const token = localStorage.getItem("access_token");

  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  }
  
  const logOut = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  }

  const aboutUs = () => {
    navigate("/aboutUs");
  }

  const contact = () => {
    navigate("/contact");
  }

  return (
    <div className='head'>
      <p className='logo'>Start Bootstrap</p>
      {token ? <div className='head-token'>
        <div className='cha'>
          <div className='info'>
            <img className='avatar-icon' src={avataIcon} />
            <p>Hi, I'm Trang</p>
          </div>
          <div className='con'>
            <p className='con-p' onClick={aboutUs}>About Us</p>
            <p className='con-p' onClick={contact}>Contact</p>
            <p className='con-p' onClick={logOut}>Logout</p>
          </div>
        </div>
      </div>
        : <button className='btn-login ' onClick={login}>Login</button>}
    </div>
  )
}

export default Header;