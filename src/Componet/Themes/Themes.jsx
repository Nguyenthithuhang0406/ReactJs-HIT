/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "./Themes.css";
import {SunOutlined, MoonOutlined} from '@ant-design/icons';

const Themes = () => {
    const [theme, setTheme] = useState('ON');

    const onClick = () => {
        setTheme(prev => (prev === 'ON' ? 'OFF' :  'ON'));
    };

  return (
        <button onClick={onClick} className={theme === 'ON' ? 'ON' : 'OFF'}>
        <div className='circle' >{theme === 'ON' ? <SunOutlined/> : <MoonOutlined/>}</div>
        {theme}
        </button>
  )
}

export default Themes;