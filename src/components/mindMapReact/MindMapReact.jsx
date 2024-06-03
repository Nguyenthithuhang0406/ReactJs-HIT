/* eslint-disable */
import React from 'react'
import Header from '../header/Header';

import a1 from "../../../public/image/a1.jpg";
import a2 from "../../../public/image/a2.jpg";
import a3 from "../../../public/image/a3.jpg";
import a4 from "../../../public/image/a4.jpg";
import a5 from "../../../public/image/a5.jpg";
import a6 from "../../../public/image/a6.jpg";
import a7 from "../../../public/image/a7.jpg";
import a8 from "../../../public/image/a8.jpg";
import a9 from "../../../public/image/a9.jpg";
import a10 from "../../../public/image/a10.jpg";
import a11 from "../../../public/image/a11.jpg";
import a12 from "../../../public/image/a12.jpg";
import a13 from "../../../public/image/a13.jpg";
import a14 from "../../../public/image/a14.jpg";
import a15 from "../../../public/image/a15.jpg";
import a16 from "../../../public/image/a16.jpg";

import './MindMapReact.scss';

const MindMapReact = () => {

  return (
    <div className='body-mindmap'>
      <Header />
      <div className='content-btn'>
        <div className='item-mindmap-1'>
          <p><b>SPA/MPA</b></p>
          <div className='img'>
            <img src={a1} />
            <img src={a2} />
          </div>
        </div>
        <div className='item-mindmap-2'>
          <p><b>Hooks</b></p>
          <div className='img'>
            <img src={a3} />
            <img src={a4} />
            <img src={a5} />
            <img src={a6} />
            <img src={a7} />
            <img src={a8} />
          </div>
        </div>
        <div className='item-mindmap-1'>
          <p><b>Form toàn tập</b></p>
          <div className='img'>
            <img src={a9} />
            <img src={a10} />
          </div>
        </div>
        <div className='item-mindmap-3'>
          <p><b>React-router-dom</b></p>
          <div className='img'>
            <img src={a11} />
          </div>
        </div>
        <div className='item-mindmap-1'>
          <p><b>useContext, useReducer</b></p>
          <div className='img'>
            <img src={a12} />
            <img src={a13} />
          </div>
        </div>
        <div className='item-mindmap-4'>
          <p><b>useContext+useReducer</b></p>
          <div className='img'>
            <img src={a14} />
          </div>
        </div>
        <div className='item-mindmap-1'>
          <p><b>Redux, Redux Toolkit</b></p>
          <div className='img'>
            <img src={a15} />
            <img src={a6} />
          </div>
        </div>
        <div className='f'></div>
      </div>
    </div>
  )
}

export default MindMapReact;