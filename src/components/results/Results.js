import React from 'react'
import './results.css'
import { useState, useEffect } from "react";
import FlightCard from "../../components/flightCard/FlightCard";
import { useParams } from 'react-router';

const Results = (props) => {
    const {filteredFlights, order, favedArray} = props;
    const searchParams = useParams();
    const [orderedFlights, setOrderedFlights] = useState([]);

    useEffect(() => {
        let prices = filteredFlights.map(flight => {
            return flight.price;
        });
        let durations = filteredFlights.map(flight => {
            return flight.flighttime;
        });
        let cheapestPrice = Math.min(...prices);
        let shortestDuration = Math.min(...durations);

        const taggedFlights = filteredFlights.map(flight => {

            if (flight.price === cheapestPrice) {
                flight.cheapest = true;
            }
            if (flight.flighttime === shortestDuration) {
               flight.shortest = true;
            }
            if (flight.seats <= 5) {
                flight.lastSeats = true;
            }

            return flight;
        });
        let oFlights = [...taggedFlights];
        if (order === "cheaper") {
            oFlights = oFlights.sort((flightA, flightB) => flightA.price > flightB.price ? 1 : -1);
        } else if (order === "shorter") {
            oFlights = oFlights.sort((flightA, flightB) => flightA.flighttime > flightB.flighttime ? 1 : -1);
        } else if (order === "recomended") {
            oFlights = oFlights.sort((flightA, flightB) => (flightA.price + flightA.flighttime) < (flightB.price + flightB.flighttim) ? 1 : -1);   
        } 
        setOrderedFlights(oFlights);
    }, [order, filteredFlights]);

    return (
        <div className="results-cards">
            {orderedFlights.map((flight) => {
                return (
                    <div className="card-group">
                        <div className="tags">
                            {flight.cheapest && <span className="tag cheapest-tag">Cheapest</span>}
                            {flight.shortest && <span className="tag shortest-tag">Fastest</span>}
                            {flight.lastSeats && <span className="tag lastseated-tag">Less than 5 seats!</span>}
                        </div>
                        <FlightCard
                            key={flight._id}
                            flight={flight}
                            searchParams={searchParams}
                            favedArray={favedArray}
                            //setSelectedFlight={setSelectedFlight}
                        />
                    </div>
                    )
                }) 
            }
        </div>
    )
}

export default Results