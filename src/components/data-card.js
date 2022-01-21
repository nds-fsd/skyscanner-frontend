import React from "react";
import './card.css';

function FlightCard() {
    const DataCard = ({from, to, dedate, arrdate, price, airline}) => {
    return (
        <div className="card-total">
                <header className="yellow"><p>Compañia: {airline}</p></header>
            <DataCard className="name-result">
            <p>Desde: {from}</p>
            <p>A: {to}</p>
            <p>Fecha de ida{dedate}</p>
            <p>Fecha de vuelta: {arrdate}</p>
            <p>Precio: {price} euros</p>
            <p>Compañia: {airline}</p>
            </DataCard>
        </div>
        )
  
    }}
  export default FlightCard;