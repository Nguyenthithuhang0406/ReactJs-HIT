/* eslint-disable */
import React from 'react'

import leftArrow from "../../../../public/image/leftArrow.png";
import righArrow from "../../../../public/image/righArrow.png";
import avataBd6 from "../../../../public/image/avataBd6.png";
import slide from "../../../../public/image/slide.png";

import "./Body6.scss";

const Body6 = () => {
    return (
        <div className='body6'>
            <p className='tt-bd6'><b>Testimonials</b></p>
            <div className='ct-bd6'>
                <img className='left-bd6' src={leftArrow} />
                <div className='center-bd6'>
                    <img className='avata-bd6' src={avataBd6} />
                    <div className='p-bd6'>
                        <p className='name-bd6'><b>John Fang </b></p>
                        <p className='web-bd6'>wordfaang.com</p>
                        <p className='ds-bd6'>Suspendisse ultrices at diam lectus nullam.
                            Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.
                        </p>
                    </div>
                </div>
                <img className='right-bd6' src={righArrow} />
            </div>
            <img className='bottom-bd6' src={slide} />
        </div>
    )
}

export default Body6;