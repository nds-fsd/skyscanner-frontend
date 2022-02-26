import React from "react";
import './selectedCard.css';
import cardimage from "../../images/card-image.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function SelectedCard({flight, onClick}) {

    const {from, to, price, airline, _id, dedate} = flight;

    const calendarDate = new Date(dedate).toDateString();

   
    return (
        <div className="selected-card">
            <div className="selected-title">
                <p> <b>Depature: </b></p>
                <p> {calendarDate}</p>
            </div>
            <div className="selected-flight">
                <div className="card-content">
                    <div className="left-content">
                        <p className="airline">{airline}</p>
                    </div>
                    <div className="flight-info">
                        <div className="from">
                            <p>{from}</p>
                        </div>
                        <div className="trip">
                            <img src={cardimage} />
                        </div>
                        <div className="to">
                            <p>{to}</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="actions">
                        <p>{price} €</p>
                    </div>
                </div>            
                        
                </div>
        </div>
        )
  
    }
export default SelectedCard;