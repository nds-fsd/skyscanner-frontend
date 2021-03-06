import React from 'react'
import './filters.css'
import {useState} from 'react';

const Filters = (props) => {
    const airlines = ['Vueling', 'Ryanair', 'Iberia', 'BinterCanarias'];
    const {filters, setFilters, maxPrice} = props;
    const [filterApplied, setFilterApplied] = useState("price");

    const handleChangeFilter = (e) => {
        setFilterApplied(e.target.value);
    }

    const handleChangePrice = (e) => {
        setFilters({...filters, minPrice: e.target.value});
    }

    const handleChangeHour = (e) => {
        setFilters({...filters, minHour: e.target.value});
    }

    const handleClickAirline = (e) => {
        if(e.target.checked) {
            setFilters({...filters, selectedAirlines: [...filters.selectedAirlines, e.target.value]});
        } else {
            setFilters({...filters, selectedAirlines: [...filters.selectedAirlines.filter((a) => a !== e.target.value)]});
        }
    }

    return (
        <div className="filters">
            <p className="filter-title">Filter by:</p>
            <div className="select-input">
                <select name="filterApplied" onChange={handleChangeFilter}>
                    <option value="price">Price</option>
                    <option value="hour">Hour</option>
                    <option value="airline">Airline</option>
                </select>
                <i></i>
            </div>
            {filterApplied === "hour" && <div className="filter">    
                <h4 className="filter-title">Hora de salida</h4>
                <h5 className="filter-subtitle">Rango de horas</h5>
                <div className="select-input">
                    <select name="hour" onChange={handleChangeHour}>
                        <option value="5:00">5:00 am</option>
                        <option value="6:00">6:00 am</option>
                        <option value="7:00">7:00 am</option>
                        <option value="8:00">8:00 am</option>
                        <option value="9:00">9:00 am</option>
                        <option value="10:00">10:00 am</option>
                        <option value="11:00">11:00 am</option>
                        <option value="12:00">12:00 pm</option>
                        <option value="13:00">1:00 pm</option>
                        <option value="14:00">2:00 pm</option>
                        <option value="15:00">3:00 pm</option>
                        <option value="16:00">4:00 pm</option>
                        <option value="17:00">5:00 pm</option>
                        <option value="18:00">6:00 pm</option>
                        <option value="19:00">7:00 pm</option>
                        <option value="20:00">8:00 pm</option>
                        <option value="21:00">9:00 pm</option>
                        <option value="22:00">10:00 pm</option>
                        <option value="23:00">11:00 pm</option>
                    </select>
                    <i></i>
                </div>
            </div> }
            {filterApplied === "price" &&<div className="filter">
                <h4 className="filter-title">Precio</h4>
                <h5 className="filter-subtitle">Precio m??nimo del vuelo</h5>
                <input type="range" min="0" max={maxPrice-1} value={filters.minPrice} step="10" className="price-range" onChange={handleChangePrice}/>
                <p className="min-price"><span>{filters.minPrice}</span>???</p>
            </div>}
            {filterApplied === "airline" && <div className="filter">
                <h4 className="filter-title airlines">Airline</h4>
                {airlines.map((airline) => {
                    return (
                        <div className="checkbox">
                            <input type="checkbox" id={airline} value={airline} className="airlne-checkbok" onClick={handleClickAirline} />
                            <label className="airline-checkbox" for={airline}>{airline}</label>
                        </div>
                    );
                })}
            </div>}
            <p className="filter-subtitle">Multilple filters comingsoon ...</p>
        </div>
    )
}

export default Filters