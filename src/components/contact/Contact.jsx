/* eslint-disable */
import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';


import "./Contact.scss";

const Contact = () => {
  return (
      <div className='contact'>
          <Header />
          <div className='body-contact'>
              <p className='content-contact'><b>Contact Start Bootstrap</b></p>
              <div className='input-group'>
                  <input className='input-contact' placeholder='EmailAddress' />
                  <button className='btn-contact'>Contact</button>
              </div>
          </div>
          <Footer/>
    </div>
  )
}

export default Contact;