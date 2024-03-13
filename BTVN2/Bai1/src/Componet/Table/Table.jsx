/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Table.css";

const Table = ({data}) => {
  return (
    <div className='bd'>
      <table className='table'>
      <thead className='head'>
        <tr style={{background:'seagreen'}}>
          <th >Rank</th>
          <th >Name</th>
          <th >Points</th>
          <th >Team</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} style={{background: index % 2 === 0 ? 'white' : 'darkgrey'}}>
            <td >{item.Rank}</td>
            <td >{item.Name}</td>
            <td >{item.Points}</td>
            <td >{item.Team}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Table;