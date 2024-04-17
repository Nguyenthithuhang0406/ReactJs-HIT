/* eslint-disable */
import React from 'react'
import searchIcon from "../../../assets/image/searchIcon.png";
import chuongIcon from "../../../assets/image/chuongIcon.png";
import accountIcon from "../../../assets/image/accountIcon.jpg";

import "./Header.scss";
const Header = () => {
    return (
        <div className='header'>
            <div className='left-header'>
                <p> Settings {' > '} </p>
                <p>User Profile</p>
            </div>
            <div className='box-search'>
                <img className="icon" src={searchIcon} />
                <input className='input' placeholder='Search...' />
            </div>
            <div className='right-header'>
                <img className='bell' src={chuongIcon} />
                <img className='account' src={accountIcon} />
            </div>
        </div>
    )
}

export default Header
