/* eslint-disable */
import React from 'react'
import { NavLink } from 'react-router-dom';

import './Header.scss';
const Header = () => {
  const onChangeActive = (props) => {
    return props.isActive ? 'active' : '';
  }
  return (
    <div className='header-menu'>
      <div className='header-menu-item'>
        <NavLink to='/' className={onChangeActive}>Home</NavLink>
      </div>
      <div className='header-menu-item'>
        <NavLink to='/profile' className={onChangeActive}>Profile</NavLink>
      </div>
      <div className='header-menu-item'>
        <NavLink to='/mind-map-react' className={onChangeActive}>Mind map ReactJs</NavLink>
      </div>
      <div className='header-menu-item'>
        <NavLink to='/he-phuong-trinh' className={onChangeActive}>HPT</NavLink>
      </div>
    </div>
  )
}

export default Header;