import React from "react";
import './card.css';

function DataCard({from, to, dedate, arrdate, price, airline}) {
   
    return (
        <div className="card-total">
                    <div className="yellow"><p className="airline-yellow">Compañia: {airline}</p></div>
                <div className="white-zone">
                    <p>Desde: {from}</p>
                    <p>A: {to}</p>
                    <p>Fecha de ida{dedate}</p>
                    <p>Fecha de vuelta: {arrdate}</p>
                    <p>Precio: {price} euros</p>
                </div>
        </div>
        )
  
    }
  export default DataCard;