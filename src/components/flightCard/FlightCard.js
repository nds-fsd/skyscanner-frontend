import React from "react";
import './flightCard.css';
import cardimage from "../../images/card-image.png";
import vuelingLogo from '../../images/airline_logos/vueling_logo.png';
import ryanairLogo from '../../images/airline_logos/ryaniar_logo.png';
import aireuropaLogo from '../../images/airline_logos/air_europa_logo.png';
import iberiaLogo from '../../images/airline_logos/iberia_logo.png';
import bintercanariasLogo from '../../images/airline_logos/binter_logo.webp';


function FlightCard(props) {
    const {onClick, flight} = props;
    const {from, to, price, airline, _id} = flight;

    console.log(airline.replace(/\s/g, '').toLowerCase());
   
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
                    <div className="from">
                        <p>{from}</p>
                    </div>
                    <div className="trip">
                        <img src={cardimage} alt="trip-icon"/>
                    </div>
                    <div className="to">
                        <p>{to}</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="actions">
                    <p>{price} €</p>
                        <div className="buttonSelect" onClick={() => onClick(_id)}>
                            <p>Select flight</p>
                        </div>
                </div>
            </div>
        </div>
        )
  
    }
export default FlightCard;