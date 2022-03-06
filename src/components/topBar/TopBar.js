import React from 'react';
import './topbar.css';

const TopBar = (props) => {

  const {setOrder} = props;

  const handleClick = (e) => {
    setOrder(e.target.value);
  }

  return (
    <div className="topbar">
      <h3 className="topbar-title">Ordenar por: </h3>
      <button className="order-filter-btn" value="cheaper" autofocus onClick={handleClick}>MÁS BARATO</button>
      <button className="order-filter-btn" value="shorter" onClick={handleClick}>MÁS CORTO</button>
      <button className="order-filter-btn" value="recomended" onClick={handleClick}>MÁS RECOMENDADO</button>
    </div>
  )
}

export default TopBar