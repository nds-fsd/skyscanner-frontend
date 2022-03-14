import React from 'react'
import './results.css'
import { useState, useEffect } from "react";
import FlightCard from "../../components/flightCard/FlightCard";
import { useParams } from 'react-router';

const Results = (props) => {
    const {filteredFlights, order} = props;
    const searchParams = useParams();
    const [orderedFlights, setOrderedFlights] = useState(filteredFlights);
    const [cheapest, setCheapest] = useState([]);
    const [shortest, setShortest] = useState([]);
    const [lastSeats, setLastSeats] = useState([]);

    useEffect(() => {
        setOrderedFlights([...filteredFlights])
    }, [filteredFlights]);

    useEffect(() => {
        let oFlights = [...orderedFlights];
        if (order === "cheaper") {
            console.log("entro en cheaper");
            oFlights = oFlights.sort((flightA, flightB) => flightA.price > flightB.price ? 1 : -1);
        } else if (order === "shorter") {
            console.log("entro aqui")
            oFlights = oFlights.sort((flightA, flightB) => flightA.flighttime > flightB.flighttime ? 1 : -1);
        } else if (order === "recomended") {
            oFlights = oFlights.sort((flightA, flightB) => (flightA.price + flightA.flighttime) < (flightB.price + flightB.flighttim) ? 1 : -1);   
        } 
        setOrderedFlights(oFlights);
    }, [order, orderedFlights])

    useEffect(() => {
        let prices = filteredFlights.map(flight => {
            return flight.price;
        });
        let durations = filteredFlights.map(flight => {
            return flight.flighttime;
        });
        let cheapestPrice = Math.min(...prices);
        let shortestDuration = Math.min(...durations);

        filteredFlights.forEach(flight => {
            if (flight.price === cheapestPrice) {
                setCheapest([.../*cheapest,*/flight]);
            }
            if (flight.flighttime === shortestDuration) {
                setShortest([.../*shortest,*/flight]);
            }
            if (flight.seats <= 5) {
                setLastSeats([.../*lastSeats,*/flight]);
            }
        })

    }, [filteredFlights])

    return (
        <div className="results-cards">
            {orderedFlights.map((flight) => {
                return (
                    <div className="card-group">
                        <div className="tags">
                            {cheapest.includes(flight) && <span className="tag cheapest-tag">Cheapest</span>}
                            {shortest.includes(flight) && <span className="tag shortest-tag">Fastest</span>}
                            {lastSeats.includes(flight) && <span className="tag lastseated-tag">Less than 5 seats!</span>}
                        </div>
                        <FlightCard
                            key={flight._id}
                            flight={flight}
                            searchParams={searchParams}
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