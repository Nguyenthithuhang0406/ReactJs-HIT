/* eslint-disable */
import React from 'react'
import xinh from '../../../public/image/xinh.jpg';
import facebookIcon from '../../../public/image/facebookIcon.png';
import instagramIcon from '../../../public/image/instagramIcon.png';
import twitterIcon from '../../../public/image/twitterIcon.png';
import tiktokIcon from '../../../public/image/tiktokIcon.png';

import './Profile.scss';
import Header from '../header/Header';
const Profile = () => {
  return (
    <>
      <Header />
      <div className='body'>
        <div className='card'>
          <div className='top-profile'>
            <div className='avatar'>
              <img src={xinh} alt='avatar' />
            </div>
          </div>
          <div className='center-profile'>
            <div className='info'>
              <div className='name'>Nguyễn Thị Thu Hằng</div>
              <br />
              <div className='job'>Mảng: Fullstack Developer</div>
              <div className='skill'>Skill: Mongodb, Express, ReactJs, Nodejs</div>
              <div className='location'>Địa chỉ: Hà Nội, Việt Nam</div>
            </div>
          </div>
          <div className='bottom-profile'>
            <img src={facebookIcon} />
            <img src={instagramIcon} />
            <img src={twitterIcon} />
            <img src={tiktokIcon} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;