/* eslint-disable */
import React from 'react'

import accountIcon from "../../../assets/image/accountIcon.jpg";
import editIcon from "../../../assets/image/editIcon.png";
import account from "../../../assets/image/account.png";
import dashboardIcon from "../../../assets/image/dashboardIcon.png";
import heartIcon from "../../../assets/image/heartIcon.png";
import settingIcon from "../../../assets/image/settingIcon.png";

import "./SideBar.scss";
const SideBar = () => {
  return (
      <div className='sidebar'>
          <div className='avata'>
              <img className='ava' src={accountIcon} />
              <img className='edit-icon' src={editIcon} />
          </div>

          <div className='group-sidebar'>
              <img className='icon-sidebar' src={account} />
              <a>
                  <p className='link-sidebar' >User Info</p>
              </a>
          </div>

          <div className='group-sidebar'>
              <img className='icon-sidebar' src={dashboardIcon} />
              <a>
                  <p className='link-sidebar' >Dashboard</p>
              </a>
          </div>

          <div className='group-sidebar'>
              <img className='icon-sidebar' src={heartIcon} />
              <a>
                  <p className='link-sidebar' >Favourites</p>
              </a>
          </div>

          <div className='group-sidebar'>
              <img className='icon-sidebar' src={settingIcon} />
              <a>
                  <p className='link-sidebar' >Settings</p>
              </a>
          </div>
      </div>

  )
}

export default SideBar;
