import React from "react"
import './resultsPage.css';
import { useState, useEffect } from "react";
import Results from "../../components/results/Results";
import SearchHeader from "../../components/searchHeader/SearchHeader";
import Sidebar from "../../components/sideBar/Sidebar";
import customFetch from '../../api';
import mockFlights from '../../data/flights-data.json';
import TopBar from "../../components/topBar/TopBar";
import { useParams } from 'react-router';


function ResultsPage () {
    const [flights, setFlights] = useState(mockFlights);
    const [selectedFlight, setSelectedFlight] = useState();
    const [filteredFlights, setFilteredFlights] = useState([]);
    const [filters, setFilters] = useState({
        minPrice: 0,
        minHour: 0,
        selectedAirlines: []
    });
    const {from, to, dedate, retdate, deid, passangers} = useParams();
    const [order, setOrder] = useState();

    useEffect(() => {
        if (filters.minPrice !== 0 || filters.minHour !== 0 || filters.selectedAirlines.length !== 0) {
            setFilteredFlights(flights.filter((flight) => flight.price > filters.minPrice && /* hour filter && */ filters.selectedAirlines.includes(flight.airline)))
        }
    }, [filters])

    /* useEffect( () => {
        customFetch("POST", `flights/search?from=${from}&to=${to}&retdate=${dedate}`)
        .then(res => {
            if (!res.ok) throw new Error("Couldn't ")
            return res.json();
        }).then((json) => {
            console.log(json);
            setFlights(json);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    //Possible mal interpretació dels fetch
    useEffect( () => {
        if (deid) {
            customFetch("POST", `flights/search?from=${to}&to=${from}&retdate=${retdate}`)
            .then(response => {
                if (!response.ok) throw new Error("Couldn't ")
                return response.json();
                })
            .then((json) => {
                setReturnFlightCard(json);
            });
        }
    }, [deid]); */

    return (
        <div className="wrapper">
            <div className="results-page">
                <Sidebar filters={filters} setFilters={setFilters}/>
                <div className="right-section">
                    <SearchHeader from={!deid ? from : to} to={!deid ? to : from} date={!deid ? dedate : retdate}/>
                    <TopBar setOrder={setOrder}/>
                    <div className="results-section">
                        <Results 
                            flights={flights} 
                            filteredFlights={filteredFlights}
                            order={order}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};  

export default ResultsPage