import React, { useContext, useState } from "react";
import { UserContext } from '../../context/userContext';
import './flightCard.css';
import cardimage from "../../images/card-image.png";
import vuelingLogo from '../../images/airline_logos/vueling_logo.png';
import ryanairLogo from '../../images/airline_logos/ryaniar_logo.png';
import aireuropaLogo from '../../images/airline_logos/air_europa_logo.png';
import iberiaLogo from '../../images/airline_logos/iberia_logo.png';
import bintercanariasLogo from '../../images/airline_logos/binter_logo.webp';
import moment from 'moment';
import { useNavigate, useParams } from 'react-router';
import customFetch from '../../api';
import { getUserToken } from "../../api/auth";



function FlightCard(props) {
    const params = useParams();
    const outboundFlight = params.outboundFlightUnparsed ? JSON.parse(params?.outboundFlightUnparsed) : undefined;
    const returnFlight = params.returnFlightUnparsed ? JSON.parse(params?.returnFlightUnparsed): undefined;
    const {flight ,setSelectedFlight, searchParams} = props;
    const {from, to, price, airline, dedate, flighttime} = flight;
    const navigate = useNavigate();

    const minutsToHHMM = (minutes) => {
        var m = minutes % 60;
        var h = (minutes-m)/60;
        return h.toString() + ":" + (m < 10?"0":"") + m.toString();
    }

    const handleClick = () => {
        if(!outboundFlight) {
            //setSelectedFlight(flight);
            navigate(`/flights/${searchParams.from}/${searchParams.to}/${searchParams.dedate}/${searchParams.retdate}/${searchParams.passangers}/${JSON.stringify(flight)}`);
        } else {
            navigate(`/flights/${searchParams.passangers}/${JSON.stringify(outboundFlight)}/${JSON.stringify(flight)}`);
        }
    }

    const handleBookingClick = () => {
        navigate("/success");
    }

    const {user} = useContext(UserContext);
    const token = getUserToken()
    const [favFlight, setFavFlight] = useState(false);

    console.log("user", user)

    const addToFavFlight = () => {
        const favedFlight = {"fav": `${flight._id}`}
        // const css =() => setFavFlight(true)
        !token ? navigate("/login") :
        customFetch("PUT", `profile/favflights/${user._id}`, {body: favedFlight })
            // .catch(() => alert("no se ha guardado"))
            // .then(response => {
            //     if (!response.ok) throw new Error("Couldn't save to favorites")
            //     return response.json();
            // })
            // .then(json => {
            //     alert(JSON.stringify(json));
            // })
            // .catch(error => {
            //     alert("error", error);
            // })
        console.log("fetch", {body: favedFlight })
    
    };

return (
        <div className="card">
            <div className={`${airline.replace(/\s/g, '').toLowerCase()} card-color `} />
            <div className="card-content">
                <div className="fav-flight" onClick={() => addToFavFlight(flight._id)}>♥</div>
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
                    <p className="price">{searchParams.passangers * price} €</p>
                    {searchParams.passangers !== "1" && <p className="price-unitary">{price} €</p>}
                    <span className="price-info">Price for 1 passenger</span>
                    {flight.seats < 5 && <span className="seats-info">{flight.seats === 1 ? "Only 1 seat left available!" : flight.seats + " available seats !"}</span>}
                    {!returnFlight ? <div>
                        {outboundFlight && flight._id === outboundFlight._id ? 
                        <button className="book-btn" onClick={handleBookingClick}>
                            Book flight
                        </button> : 
                        <button className="buttonSelect" onClick={handleClick}>
                                Select flight
                        </button>}
                    </div> : <div></div> }
                </div>
            </div>
        </div>
        )
}

export default FlightCard;