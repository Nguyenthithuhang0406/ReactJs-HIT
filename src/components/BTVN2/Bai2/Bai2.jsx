/* eslint-disable  */
import React from 'react'
import Header from '../header/header';
import SideBar from '../sideBar/SideBar';
import FormContent from '../formContent/FormContent';

import "./Bai2.scss";
const Bai2 = () => {
    return (
        <div className='body'>
            <Header />
            <hr />
            <SideBar />
            <FormContent/>
        </div>
    )
}

export default Bai2;
