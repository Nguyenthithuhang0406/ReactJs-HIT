/* eslint-disable */


import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import { ChiaCounter, decrementCounter, incrementCounter, multiCounter, powCounter, squareCount } from './store/counterSlice';

const App = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(1);
  const [input3, setInput3] = useState(0);

  const count = useSelector((state) => {
    console.log(state);
    return state.counterReducer.count;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(incrementCounter())}>Tang</button>
      <button onClick={() => dispatch(decrementCounter())}>Giam</button>
      <br/>
      <input placeholder='Nhap so muon nhan' value={input1} onChange={(e) => setInput1(e.target.value)}/>
      <button onClick={() => dispatch(multiCounter(input1))}>Nhan</button>
      <br/>
      <input placeholder='Nhap so chia' value={input2} onChange={(e) => setInput2(e.target.value)} />
      <button onClick={() => dispatch(ChiaCounter(input2))}>Chia</button>
      <br />
      <input placeholder='Nhap so mu' value={input3} onChange={(e) => setInput3(e.target.value)} />
      <button onClick={() => dispatch(powCounter(input3))}>Luy thua</button>
      <br />
      <button onClick={() => dispatch(squareCount())}>can bac 2</button>
    </div>
  )
}

export default App