/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './Header.scss';
import logo from "../../assets/image/logo .png";

const Header = ({theme, setTheme}) => {

    const onClick = () => {
        const newTheme = !theme;
        setTheme(newTheme);
        localStorage.setItem("theme", JSON.stringify(newTheme));
    };

    return (
        <header className={`header container ${theme ? "dark" : "light"}`} >
            <div className="wide container">
                <div className="header-logo">
                    <img src={logo} alt="" />
                </div>
                <nav className='header-nav'>
                    <a href="">Home</a>
                    <a href="" className='active'>Users</a>
                    <a href="">Blogs</a>
                    <a href="">Service</a>
                    <a href="">Contact</a>
                </nav>
                <button className={theme ? "true" : "false"} onClick={onClick} >
                    <div className='circle'>

                    </div>
                </button>
            </div>
        </header>
    )
}

export default Header