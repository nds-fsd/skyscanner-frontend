import React from "react";
import './card.css';

function DataCard({from, to, dedate, arrdate, price, airline}) {
   
    return (
        <div className="card-total">
                <header className="yellow"><p>Compañia: {airline}</p></header>
            <p>Desde: {from}</p>
            <p>A: {to}</p>
            <p>Fecha de ida{dedate}</p>
            <p>Fecha de vuelta: {arrdate}</p>
            <p>Precio: {price} euros</p>
            <p>Compañia: {airline}</p>
        </div>
        )
  
    }
  export default DataCard;