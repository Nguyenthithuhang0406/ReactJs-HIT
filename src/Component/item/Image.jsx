/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Image.scss";

const Image = ({children}) => {
  return (
    <div className='image-item'>
        <img src={children} className='image'/>
    </div>
  )
}

export default Image;