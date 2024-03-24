/* eslint-disable no-unused-vars */
import React from 'react'
import phone_1 from '../../assets/image/phone_1.png';
import phone_2 from '../../assets/image/phone_2.png';
import { Button } from 'react-bootstrap';
import './Content.scss';

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
      <div className="row">
        <div className="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="">
          <div className="feature-1 text-center">
            <div className="wrap-icon icon-1">
              <i className="fa-solid fa-user-group"></i>{' '}
            </div>
          <h3 className="mb-3">Explore Your Team</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
          </div>
        </div>

        <div className="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div className="feature-1 text-center">
            <div className="wrap-icon icon-1">
              <i className="fa-regular fa-sun"></i>{' '}
            </div>
            <h3 className="mb-3">Digital Whiteboard</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
          </div>
        </div>

        <div className="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
          <div className="feature-1 text-center">
            <div className="wrap-icon icon-1">
              <i className="fa-solid fa-chart-simple"></i>{' '}
            </div>
            <h3 className="mb-3">Design To Development</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Content;