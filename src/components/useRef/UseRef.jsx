/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'

const UseRef = () => {
    const [count, setCount] = useState(90);
    // const [timerId, setTimerId] = useState(0);
    const timerId = useRef(0);

    //tham chieu den DOM
    const h1Ref = useRef();
    // console.log(h1Ref.current);

    const start = () => {
        //tham chieu den gia tri
       timerId.current = setInterval(()=> {
            setCount(prev => prev- 1);
        }, 1000);
        // setTimerId(id);
        // console.log("start:", timerId);

        h1Ref.current.style.color = "red";
    }
    const stop = () => {
        clearInterval(timerId.current);
        // console.log("stop:", timerId);
    }
  return (
    <div>
        <h1 ref={h1Ref}>count: {count}</h1>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
    </div>
  )
}

export default UseRef;