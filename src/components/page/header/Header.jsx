/* eslint-disable no-unused-vars */
import React from 'react'

import ava from "../../../../public/image/ava.jpg";
import Toogle from '../../toogle/Toogle';

import "./Header.scss";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate('/profile');
  }

  const handleClickStartBoostrap = () => {
    navigate('/startBoostrap');
  }

  const handleClickTodoApp = () => {
    navigate('/todoApp');
  }

  const handleClickLogin = () => {
    navigate('/loginPage');
  }
  return (
    <div className='header-page'>
      <div className='logo-page'>
        <img className='avatar-page' src={ava} onClick={handleClickLogo}/>
      </div>
      <div className='menu-page'>
        <div className='menu-item'  onClick={handleClickStartBoostrap}>Start boostrap</div>
        <div className='menu-item' onClick={handleClickTodoApp}>Todo app</div>
        <div className='menu-item' onClick={handleClickLogin}>Login</div>
        <div>
          <Toogle/>
        </div>
      </div>
    </div>
  )
}

export default Header;