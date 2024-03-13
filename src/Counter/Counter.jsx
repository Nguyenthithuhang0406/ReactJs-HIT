/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Counter = () => {

    const marks = [100, 8, 33];

   const [counter, setCounter] = useState(() => {
        const total = marks.reduce((total, cur) => total + cur);
        return total;
   }); 

    const handleIncreament = () => {
        setCounter(counter+1);
        // setCounter(counter+1);
        // setCounter(counter+1);
//=> moi lan re-render lai chi tang 1

        
        // setCounter(prev => prev + 1);
        // setCounter(prev => prev + 1);
        // setCounter(prev => prev + 1);
        //=> re-render lai tang 3
    }

    const [field, setField] = useState("");
    const [field2, setField2] = useState("");
    const [change, setChange] = useState(false);
    const changeField = event => setField(event.target.value);
    const Click = () => {
        setChange(true);
        // const changeField = event => setField(event.target.value);
        setField2(field);
        setField("");
    }
  return (
    <div>
        <h1>Counter : {counter}</h1>
        <button onClick={handleIncreament}>increase</button>

        <br></br>
        <input type="text" onChange={changeField} value={field}></input>
        <p>noi dung o input {change === true ? <span>{field2}</span> : ""}</p>
        <button onClick={Click}>Dat lai</button>
    </div>
  )
}

export default Counter;