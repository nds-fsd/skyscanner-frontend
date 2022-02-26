import React from 'react'
import './filters.css'
import {useEffect} from 'react';

const Filters = (props) => {
    const airlines = ['Vueling', 'Rynair', 'Iberia', 'BinterCanarias'];
    const {filters, setFilters} = props;
    let airlinesList = [];

    const handleChangePrice = (e) => {
        setFilters({...filters, minPrice: e.target.value});
    }

    const handleChangeHour = (e) => {
        setFilters({...filters, minHour: e.target.value});
    }

    const handleClickAirline = (airline) => {
        if(airline !== undefined) {
            airlinesList.push(airline);
            setFilters({...filters, selectedAirlines: airlinesList});
        }
    }

    return (
        <div className="filters">
            <div className="filter">
                <h4 className="filter-title">Hora de salida</h4>
                <h5 className="filter-subtitle">Rango de horas</h5>
                <div className="hour-select">
                    <select name="hour" onChange={handleChangeHour}>
                        <option value="5:00">5:00 am</option>
                        <option value="5:30">5:30 am</option>
                        <option value="6:00">6:00 am</option>
                        <option value="6:30">6:30 am</option>
                        <option value="7:00">7:00 am</option>
                        <option value="7:30">8:30 am</option>
                        <option value="8:00">9:00 am</option>
                        <option value="8:30">9:30 am</option>
                        <option value="9:00">10:00 am</option>
                        <option value="9:30">10:30 am</option>
                        <option value="10:00">11:00 am</option>
                        <option value="10:30">11:30 am</option>
                        <option value="11:00">12:00 am</option>
                        <option value="11:30">12:30 am</option>
                        <option value="12:00">1:00 pm</option>
                        <option value="12:30">1:30 pm</option>
                        <option value="13:00">2:00 pm</option>
                        <option value="13:30">2:30 pm</option>
                        <option value="14:00">3:00 pm</option>
                        <option value="14:30">3:30 pm</option>
                        <option value="15:00">4:00 pm</option>
                        <option value="16:30">4:30 pm</option>
                        <option value="17:00">5:00 pm</option>
                        <option value="17:30">5:30 pm</option>
                        <option value="18:00">6:00 pm</option>
                        <option value="18:30">6:30 pm</option>
                        <option value="19:00">7:00 pm</option>
                        <option value="19:30">7:30 pm</option>
                        <option value="20:00">8:00 pm</option>
                        <option value="20:30">8:30 pm</option>
                        <option value="21:00">9:00 pm</option>
                        <option value="21:30">9:30 pm</option>
                        <option value="22:00">10:00 pm</option>
                        <option value="22:30">10:30 pm</option>
                        <option value="23:00">11:00 pm</option>
                        <option value="23:30">11:30 pm</option>
                        <option value="00:00">00:00 pm</option>
                        <option value="00:30">00:30 pm</option>
                    </select>
                    <i></i>
                </div>
            </div>
            <div className="filter">
                <h4 className="filter-title">Precio</h4>
                <h5 className="filter-subtitle">Precio mínimo del vuelo</h5>
                <input type="range" min="0" max="500" step="10" className="price-range" onChange={handleChangePrice}/>
                <p className="min-price"><span>{filters.minPrice}</span>€</p>
            </div>
            <div className="filter">
                <h4 className="filter-title airlines">Airline</h4>
                {airlines.map((airline) => {
                    return (
                        <div className="checkbox">
                            <input type="checkbox" id={airline} className="airlne-checkbok" onClick={() => handleClickAirline(airline)} />
                            <label className="airline-checkbox" for={airline}>{airline}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Filters