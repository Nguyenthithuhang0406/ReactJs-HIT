/* eslint-disable */
import React, { createContext, useState } from 'react'
import Content from './components/content/Content';

export const themeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(false);

  const handleChangeTheme = () => {
    setTheme(!theme);
  };

  return (
    <themeContext.Provider value={{
      theme, handleChangeTheme
    }}>
      <div className='app'>
        <Content />
      </div>
    </themeContext.Provider>
  )
}

export default App;