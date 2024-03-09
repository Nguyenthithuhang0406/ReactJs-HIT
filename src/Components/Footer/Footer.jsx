/* eslint-disable no-unused-vars */
import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='f'>
            <p className='tieude'>
            About SoftLand
            </p>
            <p className='noidung'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus pariatur, numquam aperiam dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti minus animi.
            </p>
        </div>
        <div className='f'>
            <p className='tieude'>
            Navigation
            </p>
            <ul>
                <li>Pricing</li>
                <li>Features</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='f'>
            <p className='tieude'>
            Services
            </p>
            <ul>
                <li>Team</li>
                <li>Collaboration</li>
                <li>Todos</li>
                <li>Events</li>
            </ul>
        </div>
        <div className='f'>
            <p className='tieude'>
            Downloads
            </p>
            <ul>
                <li>Get from the</li>
                <li>App Store</li>
                <li>Get from the</li>
                <li>Play Store</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer