import React from "react"
import './resultsPage.css';
import { useState, useEffect } from "react";
import Results from "../../components/results/Results";
import SearchHeader from "../../components/searchHeader/SearchHeader";
import Sidebar from "../../components/sideBar/Sidebar";
import customFetch from '../../api';
import mockFlights from '../../data/flights-data.json';
import TopBar from "../../components/topBar/TopBar";
import Footer from "../../components/footer/Footer";
import { useParams } from 'react-router';
import moment from 'moment';

function ResultsPage () {
    const [flights, setFlights] = useState(mockFlights);
    const [filteredFlights, setFilteredFlights] = useState([]);
    const [filters, setFilters] = useState({
        minPrice: 0,
        minHour: 0,
        selectedAirlines: []
    });
    const [filtersApplied, setFiltersApplied] = useState({
        minPrice: false,
        minHour: false,
        selectedAirlines: false
    });
    const {from, to, dedate, retdate, deid, passangers} = useParams();
    const [order, setOrder] = useState();

    const compareHours = (a, b) => {
        if(a !== 0) {
            let bHour = parseInt(moment(b).format('HH:mm').split(":")[0]);
            let aHour = parseInt(a.split(':')[0]);
            return aHour < bHour;
        }
    }

    useEffect(() => {
        if (filters.minPrice !== 0 && filters.minPrice !== '0') setFiltersApplied({...filtersApplied, minPrice: true});
        if (filters.minHour !== 0 && filters.minHour !== '5:00') setFiltersApplied({...filtersApplied, minHour: true});
        if (filters.selectedAirlines.length !== 0) setFiltersApplied({...filtersApplied, selectedAirlines: true});
    }, [filters])

    /*useEffect(() => {
        if (filters.minPrice !== 0) {
            if(filtersApplied.minHour || filtersApplied.minPrice || filtersApplied.selectedAirlines) {
                setFilteredFlights(filteredFlights.filter((flight) => flight.price > filters.minPrice)) 
            } else {
                setFilteredFlights(flights.filter((flight) => flight.price > filters.minPrice))
                setFiltersApplied({...filtersApplied, minPrice: true});
            }
        }
    }, [filters.minPrice])

    useEffect(() => {
        if (filters.minHour !== 0) {
            if(filtersApplied.minHour || filtersApplied.minPrice || filtersApplied.selectedAirlines) {
                setFilteredFlights(filteredFlights.filter((flight) => compareHours(filters.minHour, flight?.dedate)));
            } else {
                setFilteredFlights(flights.filter((flight) => compareHours(filters.minHour, flight?.dedate)));
                setFiltersApplied({...filtersApplied, minHour: true});
            }
        } 
    }, [filters.minHour])

    useEffect(() => {
        if(filters.selectedAirlines.length !== 0) {
            if (filtersApplied.minHour || filtersApplied.minPrice || filtersApplied.selectedAirlines) {
                setFilteredFlights(filteredFlights.filter((flight) => filters.selectedAirlines.includes(flight.airline)));
            } else {
                setFilteredFlights(flights.filter((flight) => filters.selectedAirlines.includes(flight.airline)));
                if (filters.selectedAirlines.length === 0) {
                    setFiltersApplied({...filtersApplied, selectedAirlines: false});
                } else {
                    setFiltersApplied({...filtersApplied, selectedAirlines: true});
                }
            }  
        }
    }, [filters.selectedAirlines])*/

    useEffect(() => {
        let f = filtersApplied.minPrice && filtersApplied.minHour === 0 && filtersApplied.selectedAirlines !== 0 ? [...filteredFlights] : [...flights];
        if (!filtersApplied.minPrice && !filtersApplied.minHour === 0 && !filtersApplied.selectedAirlines) {
            setFilteredFlights(flights);
        } else {
            if (filtersApplied.minPrice) {
                setFilteredFlights(f.filter((flight) => flight.price > filters.minPrice));
            }
            if (filtersApplied.selectedAirlines) {
                setFilteredFlights(f.filter((flight) => filters.selectedAirlines.includes(flight.airline)));
            }
            if (filtersApplied.minHour) {
                setFilteredFlights(f.filter((flight) => compareHours(filters.minHour, flight?.dedate)));
            }
            //setFilteredFlights(f);      
        };
    }, [filters, filtersApplied]);

    console.log("Los filtros en result page son?", filters, "y los filteredFlights son", filteredFlights, filtersApplied)

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
            <Footer />
        </div>
    )
};  

export default ResultsPage