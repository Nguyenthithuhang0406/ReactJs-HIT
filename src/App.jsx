/* eslint-disable */
import React, { useReducer, useState } from 'react'

//useState
//initState
//action (down/up)

//useReducer
//initState
const initState = 0;
//actions
const UP_COUNT = 'up';
const DOWN_COUNT = 'down';
//reducer
const reducer = (state, action) => {

  switch (action) {
    case UP_COUNT:
      return state + 1;
    case DOWN_COUNT:
      return state - 1;
    
    default:
      throw new Error("invalid action");
  }

}
//dispatch
const App = () => {

  //dispatch
  const [count, dispatch] = useReducer(reducer, initState); 

  const handleDown = () => {
    setCount(count - 1);
  };

  const handleUp = () => {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={() => dispatch(DOWN_COUNT)}>down</button>
      <button onClick={() => dispatch(UP_COUNT)}>up</button>
      <br />
      <p>{count}</p>
    </>
  )
}

export default App;