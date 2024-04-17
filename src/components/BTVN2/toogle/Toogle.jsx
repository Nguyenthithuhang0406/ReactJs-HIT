/* eslint-disable */
import React, { useState } from 'react';

import "./Toogle.scss";

const Toogle = () => {
    const [theme, setTheme] = useState('ON');

    const onClick = () => {
        setTheme(prev => (prev === 'ON' ? 'OFF' : 'ON'));
    };

  return (
      <button onClick={onClick} className={theme === 'ON' ? 'ON' : 'OFF'}>
          <div className='circle'></div>
    </button>
  )
}

export default Toogle;
