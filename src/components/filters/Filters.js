import React from 'react'
import './filters.css'
import {useEffect} from 'react';

const Filters = (props) => {
    const airlines = ['Vueling', 'Ryanair', 'Iberia', 'BinterCanarias'];
    const {filters, setFilters} = props;

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
            setFilters({...filters, selectedAirlines: filters.selectedAirlines.filter((a) => a !== e.target.value)});
        }
    }

    return (
        <div className="filters">
            <div className="filter">
                <h4 className="filter-title">Departure time</h4>
                <h5 className="filter-subtitle">Hour range</h5>
                <div className="hour-select">
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
                        <option value="12:00">2:00 pm</option>
                        <option value="14:00">3:00 pm</option>
                        <option value="15:00">4:00 pm</option>
                        <option value="16:00">5:00 pm</option>
                        <option value="17:00">6:00 pm</option>
                        <option value="18:00">7:00 pm</option>
                        <option value="19:00">8:00 pm</option>
                        <option value="20:00">9:00 pm</option>
                        <option value="21:00">10:00 pm</option>
                        <option value="22:00">11:00 pm</option>
                    </select>
                    <i></i>
                </div>
            </div>
            <div className="filter">
                <h4 className="filter-title">Price</h4>
                <h5 className="filter-subtitle">Minimum flight price</h5>
                <input type="range" min="0" max="500" className="price-range" onChange={handleChangePrice}/>
                <p className="min-price"><span>{filters.minPrice}</span>€</p>
            </div>
            <div className="filter">
                <h4 className="filter-title airlines">Airline</h4>
                {airlines.map((airline) => {
                    return (
                        <div className="checkbox">
                            <input type="checkbox" id={airline} value={airline} className="airlne-checkbok" onClick={handleClickAirline} />
                            <label className="airline-checkbox" for={airline}>{airline}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Filters