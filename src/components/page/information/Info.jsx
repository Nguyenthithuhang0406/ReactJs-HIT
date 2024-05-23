/* eslint-disable */
import React from 'react'

import ava from "../../../../public/image/ava.jpg";
import iconsSchool from "../../../../public/image/iconsSchool.png";
import iconsAddress from "../../../../public/image/iconsAddress.png";

import "./Info.scss";
import Header from '../header/Header';

const Info = () => {
  return (
    <>
      <Header/>
      <div className='body'>
        <div className='body-info'>
          <div className='top'>
            <img className='avar-info' src={ava} />
            <div className='name-info'>
              <p className='name'><b>Nguyễn Thị Thu Hằng</b></p>
              <p>hangnguyenthithu32@gmail.com</p>
              <p>0389 353 783</p>
            </div>
          </div>
          <div className='add-info'>
            <div className='group-item'>
              <img className='img-icon' src={iconsSchool} />
              <p>Trường đại học Cộng Nghiệp Hà Nội - công nghệ thông tin</p>
            </div>
            <div className='group-item'>
              <img className='img-icon' src={iconsAddress} />
              <p>Số nhà 39, ngõ 134, Cầu Diễn, Minh Khai, Bắc Từ Liêm, Hà Nội</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info;