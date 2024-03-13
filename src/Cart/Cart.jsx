/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = (props) => {
  return (
    <div>
        <img src={props.image}/>
        <p>name: {props.name}</p>
        {props.children}
    </div>
  )
}

export default Cart