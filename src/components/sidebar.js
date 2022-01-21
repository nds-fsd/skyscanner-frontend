import React from 'react';
import './sidebar.css';

const Sidebar =() => {
  return (
    <div className="sidebar-container">
      <p className="filtered">Filtered</p>
      <div className="departure-times">
            <p>Departure times</p>
            <input type="range"></input>
       </div>
       <div className="price">
            <p>Price</p>
            <input type="range"></input>
       </div>
       <div className="airline">
            <p>Airline</p>
            <input type="range"></input>
       </div>
      <button className="button">Apply filters</button> 
    </div>
  

  );
}
export default Sidebar;