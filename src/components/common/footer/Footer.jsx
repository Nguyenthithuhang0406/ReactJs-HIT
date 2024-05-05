/* eslint-disable */
import React from 'react'

import facebookIcon from "../../../../public/image/facebookIcon.png";
import instagramIcon from "../../../../public/image/instagramIcon.png";
import twitterIcon from "../../../../public/image/twitterIcon.png";
import message from "../../../../public/image/message.png";

import "./Footer.scss";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='info'>
                <div className='logo'>
                    <div className='lg1'></div>
                    <div className='lg2'></div>
                    <p className='name-footer'><b>DataWarehouse</b></p>
                </div>

                <div className='tt-phu-footer'>
                    <p className='tt1-footer'><b>Warehouse Society, 234</b></p>
                    <p className='tt1-footer'><b>Bahagia Ave Street PRBW 29281</b></p>
                </div>

                <div className='tt-info-footer'>
                    <p className='ct-footer'>info@warehouse.project</p>
                    <p className='ct-footer'>1-232-3434 (Main)</p>
                </div>
                <div className='phu-footer'>
                    <p className='phu'>© Datawarehouse™, 2020. All rights reserved.</p>
                    <p className='phu'>Company Registration Number: 21479524.</p>
                </div>
            </div>

            <div className='colums-footer'>
                <p className='tt-footer'><b>About</b></p>

                <div className='ct-colums-footer'>
                    <p className='ct-colums'>Profile</p>
                    <p className='ct-colums'>Features</p>
                    <p className='ct-colums'>Careers</p>
                    <p className='ct-colums'>DW News</p>
                </div>
            </div>

            <div className='colums-footer'>
                <p className='tt-footer'><b>Help</b></p>

                <div className='ct-colums-footer'>
                    <p className='ct-colums'>Support</p>
                    <p className='ct-colums'>Sign up</p>
                    <p className='ct-colums'>Guide</p>
                    <p className='ct-colums'>Reports</p>
                    <p className='ct-colums'>Q&A</p>
                </div>
            </div>

            <div className='colums-contact-footer'>
                <p className='tt-footer'><b>Social Media</b></p>

                <div className='icon-contact'>
                    <img className='icon-ct' src={facebookIcon} />
                    <img className='icon-ct' src={instagramIcon} />
                    <img className='icon-ct' src={twitterIcon} />
                </div>

                <div className='messager'>
                    <img src={message} className='messageIcon'/>
                </div>
            </div>
        </div>
    )
}

export default Footer;