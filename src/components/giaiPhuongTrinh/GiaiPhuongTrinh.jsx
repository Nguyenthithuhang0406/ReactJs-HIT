/* eslint-disable */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GiaiPhuongTrinhBac4 } from '../../store/quarticequationSlice';

import './GiaiPhuongTrinh.scss';
import Header from '../header/Header';

const GiaiPhuongTrinh = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => {
    state.GPTReducer.result;
  });
  const [heSo, setHeSo] = useState({
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHeSo({
      ...heSo,
      [name]: value
    });
  };
  
  const handleSubmit = () => {
    const { a, b, c, d, e } = heSo;
    dispatch(GiaiPhuongTrinhBac4({ a, b, c, d, e }));
  };

  return (
    <div className='body-ptb4'>
      <Header />
      <div className='content-ptb4'>
        <h1> Hệ phương trình bậc 4</h1>
        <div className='input'>
          <input type='number' name='a' value={heSo.a} onChange={handleChange} />X^4 +
          <input type='number' name='b' value={heSo.b} onChange={handleChange} />X^3 +
          <input type='number' name='c' value={heSo.c} onChange={handleChange} />X^2 +
          <input type='number' name='d' value={heSo.d} onChange={handleChange} />X +
          <input type='number' name='e' value={heSo.e} onChange={handleChange} /> = 0
        </div>
        <div className='btn'><button onClick={handleSubmit}>Tìm x</button></div>
      </div>
      <br/><br/>
      {result && (
        <div>
          {result.map((item, index) => (
            <p key={index}>x{index + 1} = {item}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default GiaiPhuongTrinh;