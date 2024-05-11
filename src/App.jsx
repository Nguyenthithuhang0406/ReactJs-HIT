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
const DIVIDE_BY = 'divide';
//reducer
const reducer = (state, action) => {

  switch (action.type) {
    case UP_COUNT:
      return state + 1;
    case DOWN_COUNT:
      return state - 1;
    case DIVIDE_BY:
      // return state / action.divisor;   //chia dung
      return Math.floor(state / action.divisor);

    default:
      throw new Error("invalid action");
  }

}
//dispatch
const App = () => {

  //dispatch
  const [count, dispatch] = useReducer(reducer, initState);
  const [divisor, setDivisor] = useState(1);

  const handleDown = () => {
    setCount(count - 1);
  };

  const handleUp = () => {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={() => dispatch({ type: DOWN_COUNT })}>down</button>
      <button onClick={() => dispatch({ type: UP_COUNT })}>up</button>
      <br/><br/>
      <div>
        <input className='input' onChange={(e) => setDivisor(e.target.value)}
        />
        <button onClick={() => dispatch({type: DIVIDE_BY, divisor: divisor})}>divide</button>
      </div>

      <br />
      <p>{count}</p>
    </>
  )
}

export default App;