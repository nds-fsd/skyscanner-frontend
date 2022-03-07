import React from 'react';
import Filters from '../filters/Filters';
import './sidebar.css';

const Sidebar =(props) => {

  const {filters, setFilters} = props;

  return (
    <div className="sidebar-container">
      <Filters filters={filters} setFilters={setFilters}/>
    </div>
  );
}
export default Sidebar;