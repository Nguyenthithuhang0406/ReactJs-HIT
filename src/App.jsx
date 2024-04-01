/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import UseRef from './components/useRef/UseRef';
import UseMemo from './components/useMemo/UseMemo';
import Content from './components/content/Content';

const App = () => {

  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(prev => prev + 1);
  }
  return (
    <>
      {/* <UseRef/> */}
      {/* <UseMemo/> */}
      <Content onCreament = {onClick}/>

      <p>count : {count}</p>
    </>
  )
}

export default App;