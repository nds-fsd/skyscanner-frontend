import React from "react";
import './flightCard.css';
import cardimage from "../../images/card-image.png";
import vuelingLogo from '../../images/airline_logos/vueling_logo.png';
import ryanairLogo from '../../images/airline_logos/ryaniar_logo.png';
import aireuropaLogo from '../../images/airline_logos/air_europa_logo.png';
import iberiaLogo from '../../images/airline_logos/iberia_logo.png';
import bintercanariasLogo from '../../images/airline_logos/binter_logo.webp';
import moment from 'moment';


function SimpleFlightCard(props) {

    const {simpleFlight} = props;
    const {airline, dedate, from, to, price, flighttime} = simpleFlight;

    const minutsToHHMM = (minutes) => {
        var m = minutes % 60;
        var h = (minutes-m)/60;
        return h.toString() + ":" + (m < 10?"0":"") + m.toString();
    }

    return (
        <div className="card">
            <div className={`${airline?.replace(/\s/g, '').toLowerCase()} card-color `} />
            <div className="card-content">
                <div className="logo-container">
                    {airline?.replace(/\s/g, '').toLowerCase() === "vueling" && <img className="airline-logo" alt={airline} src={vuelingLogo}/>}
                    {airline?.replace(/\s/g, '').toLowerCase() === "ryanair" && <img className="airline-logo" alt={airline} src={ryanairLogo}/>}
                    {airline?.replace(/\s/g, '').toLowerCase() === "iberia" && <img className="airline-logo" alt={airline} src={iberiaLogo}/>}
                    {airline?.replace(/\s/g, '').toLowerCase() === "aireuropa" && <img className="airline-logo" alt={airline} src={aireuropaLogo}/>}
                    {airline?.replace(/\s/g, '').toLowerCase() === "bintercanarias" && <img className="airline-logo" alt={airline} src={bintercanariasLogo}/>}
                </div>
                <div className="flight-info">
                    <div className="from-to">
                        <p className="city-name">{from}</p>
                        <span className="de-arr-time">{moment(dedate).format('LT')}</span>
                    </div>
                    <div className="trip">
                        
                        <img src={cardimage} alt="trip-icon"/>
                        <div className="duration">
                            <span>DIRECT</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="clock-icon" width="10px" height="10px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{minutsToHHMM(flighttime)}</span>
                        </div>
                    </div>
                    <div className="from-to">
                        <p className="city-name">{to}</p>
                        <span className="de-arr-time">{(moment(Date.parse(dedate)+(flighttime*60000)).format('LT'))}</span>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="actions">
                    <p className="price">{price} €</p>
                    <span className="price-info">Precio para 1 pasajero</span>
                </div>
            </div>
        </div>
        )
}

export default SimpleFlightCard;