import React from "react";
import './flightCard.css';
import cardimage from "../../images/card-image.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function FlightCard({flight, onClick}) {

    const {from, to, price, airline, _id} = flight;
    // const { register, handleSubmit} = useForm();
    // const navigate = useNavigate();
    // const onSubmit = data => {
    //     navigate(`/return-flights/${from}/${to}/${dedate}/${arrdate}`);
    // };
   
    return (
        <div className="card">
                <div className="card-color">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Logo_Vueling.svg/768px-Logo_Vueling.svg.png"/>
                </div>
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
                            <div className="buttonSelect" onClick={() => onClick(_id)}>
                                <p>Select flight</p>
                            </div>
                        {/* <form onSubmit={handleSubmit(onSubmit)} className="form">
                            <div className="form-enviar">
                                <input type="submit" value="Select flight"/>
                            </div>
                        </form> */}
                    </div>
                </div>
        </div>
        )
  
    }
export default FlightCard;