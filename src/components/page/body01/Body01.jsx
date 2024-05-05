/* eslint-disable */
import React from 'react';

import image1 from "../../../../public/image/image1.png";

import "./Body01.scss";
import { useNavigate } from 'react-router-dom';

const Body01 = () => {
    const access_token = localStorage.getItem("access_token");

    const navigate = useNavigate();

    const handleClickLogo = () => {
        navigate('/');
    };

    const handleClickProfile = () => {
        navigate('/profile');
    };

    const handleLogOut = () => {
        localStorage.removeItem("access_token");
        navigate('/');
    };

    const handleClickSignIn = () => {
        navigate('/signIn');
    };

    return (
        <div className='body01'>
            <div className='top'>
                <div className='logo' onClick={handleClickLogo}>
                    <div className='lg1'></div>
                    <div className='lg2'></div>
                </div>
                <div className='button-top'>
                    {access_token
                        ?
                        <div className='top-signIn'>
                            <button className='btn-top' onClick={handleClickProfile}>Profile</button>
                            <button className='btn-top' onClick={handleLogOut}>Logout</button>
                        </div>
                        :
                        <div className='top-NotSignIn' onClick={handleClickSignIn}>Sign In</div>}
                </div>
            </div>

            <div className='ct1'>
                <div className='headline'>
                    <p className='headline-h1'><b>Save your data storage here.</b></p>
                    <p className='headline-h5'>Data Warehouse is a data storage area that has been
                        tested for security, so you can store your data here
                        safely but not be afraid of being stolen by others.</p>
                    <button className='btn-headline'>Learn more</button>
                </div>

                <div className='image1'>
                    <img src={image1} />
                </div>
            </div>
        </div>
    )
}

export default Body01