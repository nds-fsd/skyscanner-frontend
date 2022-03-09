import React from "react"
import './resultsPage.css';
import { useState, useEffect } from "react";
import Results from "../../components/results/Results";
import SearchHeader from "../../components/searchHeader/SearchHeader";
import Sidebar from "../../components/sideBar/Sidebar";
import customFetch from '../../api';
//import mockFlights from '../../data/flights-data.json';
import TopBar from "../../components/topBar/TopBar";
import Footer from "../../components/footer/Footer";
import { useParams } from 'react-router';
import moment from 'moment';

function ResultsPage () {
    const [flights, setFlights] = useState(mockFlights);
    const [filteredFlights, setFilteredFlights] = useState(mockFlights);
    const [filters, setFilters] = useState({
        minPrice: 0,
        minHour: 0,
        selectedAirlines: []
    });
    const {from, to, dedate, retdate, deid, passangers} = useParams();
    const [order, setOrder] = useState();
    const [maxPrice, setMaxPrice] = useState(1000);

    const compareHours = (a, b) => {
        if(a !== 0) {
            let bHour = parseInt(moment(b).format('HH:mm').split(":")[0]);
            let aHour = parseInt(a.split(':')[0]);
            console.log(aHour, bHour,  aHour < bHour);
            return aHour < bHour;
        }
    }

    useEffect(() => {
        let prices = flights.map((f)=> {
            return f.price*passangers;
        });
        setMaxPrice(Math.max.apply(Math, prices));
    }, [filters])

    useEffect(() => {
        let filtered = filteredFlights;
        if (filters.minPrice === 0 && filters.minHour === 0 && filters.selectedAirlines.length === 0) {
            setFilteredFlights([...filtered]);
        } else {
            if (filters.minPrice !== 0) {
                filtered = flights.filter((flight) => flight.price > filters.minPrice);
            }
            if (filters.selectedAirlines.length !== 0) {
                filtered = flights.filter((flight) => filters.selectedAirlines.includes(flight.airline));
            }
            if (filters.minHour !== 0) {
                filtered = flights.filter((flight) => compareHours(filters.minHour, flight.dedate));
            }
            setFilteredFlights([...filtered]);
        };
    }, [filters]);

    useEffect( () => {
        customFetch("GET", `flights/search?from=${from}&to=${to}&dedate=${dedate}`)
        .then((json) => {
            console.log(json);
            setFlights(json);
        }).catch(error => {
            console.error(error);
        });
    }, []);
    //Possible mal interpretació dels fetch
    /*useEffect( () => {
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
                <Sidebar filters={filters} setFilters={setFilters} maxPrice={maxPrice}/>
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
            <Footer />
        </div>
    )
};  

export default ResultsPage