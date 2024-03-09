/* eslint-disable no-unused-vars */
import React from 'react'
import phone_1 from '../../assets/image/phone_1.png';
import phone_2 from '../../assets/image/phone_2.png';
import { Button } from 'react-bootstrap';
import './Content.css';

const Content = () => {
  return (
    <>
    <div className='contain'>
        <div className='content'>
            <p className='ct1'><b>Promote Your App with SoftLand</b></p>
            <p className='ct2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <Button className='bt'>Get started</Button>
        </div>
        <div className='image'>
            <img className='im1' src={phone_1}/>
            <img className='im2' src={phone_2}/>
        </div>
    </div>
    <div className='contain2'>
      <p className='ct3'> <b>Save your time to using SoftLand</b></p>
    </div>
    </>
  )
}

export default Content;