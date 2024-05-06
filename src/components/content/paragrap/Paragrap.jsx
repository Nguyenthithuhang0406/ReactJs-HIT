/* eslint-disable */
import React, { useContext } from 'react'

import "./Paragrap.scss";
import { themeContext } from '../../../App';

const Paragrap = () => {
    const {theme, handleChangeTheme} = useContext(themeContext);

  return (
      <div className={theme ? "true" : "false"}>
          <button onClick={handleChangeTheme} >Toggle</button>
          Paragrap
      </div>
  )
}

export default Paragrap;