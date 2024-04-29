/* eslint-disable */
import React from 'react'

import "./Content4Item.scss";

const Content4Item = ({ avata, name, describe }) => {
    return (
        <div className='content4-item'>
            <img className='avata4' src={avata} />
            <p className='name4'><b>{name}</b></p>
            <p className='decribe4'>" {describe} "</p>
        </div>
    )
}

export default Content4Item;