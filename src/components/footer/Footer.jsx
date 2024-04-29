/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom';

import facebookIcon from "../../assets/images/facebookIcon.png";
import twitterIcon from "../../assets/images/twitterIcon.png";
import instagramIcon from "../../assets/images/instagramIcon.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-item1'>
        <div className='list-menu'>
          <p ><Link className='link' to="/aboutUs">About us</Link></p>
          <p ><Link className='link' to="/contact">Contact</Link></p>
          <p ><Link className='link' to="/login">Login</Link></p>
          <p ><Link className='link' to="/register">Signup</Link></p>
        </div>
      </div>
      <div className='footer-item2'>
        <p className='copywrite'>© Your Website 2023. All Rights Reserved.</p>
        <div className='icon'>
          <img className='icon-item' src={facebookIcon} />
          <img className='icon-item' src={twitterIcon} />
          <img className='icon-item' src={instagramIcon} />
        </div>
      </div>
    </div>
  )
}

export default Footer;