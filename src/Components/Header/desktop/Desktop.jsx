/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../../assets/image/logo.png';
import desktop from '../../../assets/image/desktop.png';
import tablet from '../../../assets/image/tablet.png';
import smartphone from '../../../assets/image/smartphone.png';
import download from '../../../assets/image/download.png';
import tab from '../../../assets/image/tab.png'
import './index.scss';
import { Link } from 'react-router-dom';


const Desktop = () => {

  return (
    <>
    <div className='header'>
      <div className='left-header'>
        <img src={logo} className='logo'/>
        <img src={desktop} className='icon'/>
        <img src={tablet} className='icon'/>
        <img src={smartphone} className='icon'/>
      </div>
      <div className='between-header'>
        <p className='name-header'>SoftLand</p>
      </div>
      <div className='right-header'>
        <div>
          <img src={tab} className='icon'/>
        </div>
        <div className='download'>
          <div><img src={download} className='icon'/></div>
          <div><p className='dl'>DOWNLOAD</p></div>
        </div>
      </div>
    </div>
    
      </>
  )
}

export default Desktop;