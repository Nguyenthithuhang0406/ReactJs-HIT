/* eslint-disable */
import React from 'react'


import "./ContentItem.scss";

const ContentItem = ({ image, title, describe }) => {
  return (
    <div className='content-Item'>
      <img className='image' src={image} />
      <p className='title'><b>{title}</b></p>
      <p className='describe'> {describe}</p>
    </div>
  )
}

export default ContentItem