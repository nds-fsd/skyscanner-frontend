/*import React from "react";
import './selectedFlightCard.css';
import cardimage from "../../images/card-image.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function SelectedFlightCard(props) {
    const {flight} = props;
    const {from, to, price, airline, dedate, flighttime, _id} = flight;
    const navigate = useNavigate();

    const minutsToHHMM = (minutes) => {
        var m = minutes % 60;
        var h = (minutes-m)/60;
        return h.toString() + ":" + (m<10?"0":"") + m.toString();
    }

    const handleClick = () => {
        setSelectedFlight(flight);
        navigate(`/flights/${searchParams.from}/${searchParams.to}/${searchParams.dedate}/${searchParams.retdate}/${JSON.stringify(flight)}`);
    }

    return (
        <div className="card">
            <div className={`${airline.replace(/\s/g, '').toLowerCase()} card-color `} />
            <div className="card-content">
                <div className="logo-container">
                    {airline.replace(/\s/g, '').toLowerCase() === "vueling" && <img className="airline-logo" alt={airline} src={vuelingLogo}/>}
                    {airline.replace(/\s/g, '').toLowerCase() === "ryanair" && <img className="airline-logo" alt={airline} src={ryanairLogo}/>}
                    {airline.replace(/\s/g, '').toLowerCase() === "iberia" && <img className="airline-logo" alt={airline} src={iberiaLogo}/>}
                    {airline.replace(/\s/g, '').toLowerCase() === "aireuropa" && <img className="airline-logo" alt={airline} src={aireuropaLogo}/>}
                    {airline.replace(/\s/g, '').toLowerCase() === "bintercanarias" && <img className="airline-logo" alt={airline} src={bintercanariasLogo}/>}
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
                            <svg xmlns="http://www.w3.org/2000/svg" className="clock-icon" fill="E5E5E5" width="10px" height="10px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                    {flight.seats < 5 && <span className="seats-info">{flight.seats === 1 ? "Sólo queda 1 asiento disponible !" : flight.seats + " asientos disponibles !"}</span>}
                    <button className="buttonSelect" onClick={handleClick}>
                        Elegir vuelo
                    </button>
                </div>
            </div>
        </div>
        )
}
export default SelectedFlightCard;*/