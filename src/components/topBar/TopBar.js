import React from 'react';
import './topbar.css';

const TopBar = (props) => {

  const {setOrder} = props;

  const handleClick = (e) => {
    setOrder(e.target.value);
  }

  return (
    <div className="topbar">
      <h3 className="topbar-title">Order by: </h3>
      <button className="order-filter-btn" value="cheaper" autoFocus onClick={handleClick}>BEST PRICE</button>
      <button className="order-filter-btn" value="shorter" onClick={handleClick}>FASTEST</button>
      <button className="order-filter-btn" value="recomended" onClick={handleClick}>RECOMMENDED</button>
    </div>
  )
}

export default TopBar