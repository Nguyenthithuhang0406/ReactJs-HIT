/* eslint-disable */
import React from 'react'
import Header from '../header/Header'
import Content4Full from '../content4/content4Full/Content4Full'
import Footer from '../footer/Footer'

import "./AboutUs.scss";

const AboutUs = () => {
  return (
      <div className='about-us'>
          <Header />
          <div className='body1'>
              <p className='body-content1'><b>About Us</b></p>
          </div>
          <Content4Full />
          <Footer/>
    </div>
  )
}

export default AboutUs