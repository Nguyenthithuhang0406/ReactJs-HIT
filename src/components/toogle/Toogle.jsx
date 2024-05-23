/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import "./Toogle.scss";
import { SunOutlined, MoonOutlined } from '@ant-design/icons';

const Toogle = () => {
  const [theme, setTheme] = useState('ON');

  useEffect(() => {
    document.body.className = theme === 'ON' ? 'LIGHT' : 'DARK';
  }, [theme]);

  const onClick = () => {
    setTheme(prev => (prev === 'ON' ? 'OFF' : 'ON'));
  };



  return (
    <button onClick={onClick} className={theme === 'ON' ? 'ON' : 'OFF'}>
      <div className='circle' >{theme === 'ON' ? <SunOutlined /> : <MoonOutlined />}</div>
      <p>{theme}</p>
    </button>
  )
}

export default Toogle;