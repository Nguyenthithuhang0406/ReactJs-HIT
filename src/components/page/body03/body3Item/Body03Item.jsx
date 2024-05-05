/* eslint-disable */
import React from 'react'

import iconsMuiTen from "../../../../../public/image/iconsMuiTen.png";
import "./Body03Item.scss";

const Body03Item = ({ image3, tt, ds, background }) => {
    return (
        <div className='item1-bd3'>
            <img src={image3} className='image31' />
            <div className="retangle" >
                <img src={background} />
            </div>

            <div className='p-item-bd3'>
                <p className='tt-item-bd3'><b>{tt}</b></p>
                <p className='ds-item-bd3'>{ds}</p>
                <div className='learnMore-bd3'>
                    <p className='lm-bd3'><b>Learn more</b></p>
                    <div className='icon-bd3'>
                        <img src={iconsMuiTen} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body03Item;