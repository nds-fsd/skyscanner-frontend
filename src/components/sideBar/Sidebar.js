import React from 'react';
import Filters from '../filters/Filters';
import './sidebar.css';

const Sidebar =(props) => {

  const {filters, setFilters, maxPrice} = props;

  return (
    <div className="sidebar-container">
      <Filters filters={filters} setFilters={setFilters} maxPrice={maxPrice}/>
    </div>
  );
}
export default Sidebar;