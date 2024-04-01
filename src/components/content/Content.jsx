/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { memo } from 'react'

//ReactMomo
//khong truyen props thi dung
const Content = ({onCreament}) => {
    console.log("useMemo");
    
  return (
    <div>Content
    <button onClick={onCreament}>increase</button>
    </div>
  )
}

export default memo(Content);