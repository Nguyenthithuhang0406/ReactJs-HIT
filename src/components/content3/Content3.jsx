/* eslint-disable */
import React from 'react'

import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";

import "./Content3.scss";
const Content3 = () => {
    return (
        <>
            <div className='ct'>
                <div className='content-desktop'>
                    <div className='text'>
                        <p className='tt1'><b>Fully Responsive Design</b></p>
                        <p className='tt2'>When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                    </div>

                    <div className='image'>
                        <img src={image1} />
                    </div>

                    <div className='image'>
                        <img src={image2} />
                    </div>

                    <div className='text'>
                        <p className='tt1'><b>Updated For Bootstrap 5</b></p>
                        <p className='tt2'>Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
                    </div>

                    <div className='text'>
                        <p className='tt1'><b>Easy to Use & Customize</b></p>
                        <p className='tt2'>Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                    </div>

                    <div className='image'>
                        <img src={image3} />
                    </div>
                </div>
                <div className='content-smartphone'>
                    <div className='image'>
                        <img src={image1} />
                    </div>

                    <div className='text'>
                        <p className='tt1'><b>Fully Responsive Design</b></p>
                        <p className='tt2'>When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                    </div>

                    <div className='image'>
                        <img src={image2} />
                    </div>

                    <div className='text'>
                        <p className='tt1'><b>Updated For Bootstrap 5</b></p>
                        <p className='tt2'>Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
                    </div>

                    <div className='image'>
                        <img src={image3} />
                    </div>

                    <div className='text'>
                        <p className='tt1'><b>Easy to Use & Customize</b></p>
                        <p className='tt2'>Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Content3