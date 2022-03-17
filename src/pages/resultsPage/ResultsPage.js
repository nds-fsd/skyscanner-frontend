import React, { useContext } from "react"
import './resultsPage.css';
import { useState, useEffect } from "react";
import Results from "../../components/results/Results";
import SearchHeader from "../../components/searchHeader/SearchHeader";
import Sidebar from "../../components/sideBar/Sidebar";
import customFetch from '../../api';
import TopBar from "../../components/topBar/TopBar";
import Footer from "../../components/footer/Footer";
import { useParams } from 'react-router';
import moment from 'moment';
import { UserContext } from '../../context/userContext';
import NavBar from "../../components/navbar/Navbar";
import noResultsFound from "../../files/no-results-found.png";
import Swal from 'sweetalert2';
import loading from "../../files/spinner.gif";

function ResultsPage () {
    const [flights, setFlights] = useState([]);
    const [filteredFlights, setFilteredFlights] = useState([]);
    const [filters, setFilters] = useState({
        minPrice: 0,
        minHour: 0,
        selectedAirlines: []
    });
    const {from, to, dedate, retdate, deid, passangers} = useParams();
    const [order, setOrder] = useState();
    const [maxPrice, setMaxPrice] = useState(1000);
    const [spinner, setSpinner] = useState(false); 

    const compareHours = (a, b) => {
        if(a !== 0) {
            let bHour = parseInt(moment(b).format('HH:mm').split(":")[0]);
            let aHour = parseInt(a.split(':')[0]);
            return aHour < bHour;
        }
    }

    useEffect(() => {
        let prices = flights.map((f)=> {
            return f.price*passangers;
        });
        setMaxPrice(Math.max.apply(Math, prices));
    }, [filters, passangers, flights])

    useEffect(() => {
        let filtered = flights;
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
    }, [filters, flights]);

    useEffect( () => {
        setSpinner(true);
        customFetch("GET", `flights/search?from=${from}&to=${to}&dedate=${dedate}`)
            .then((json) => {
                //console.log(json);
                setFlights(json);
                setFilteredFlights(json);
                setSpinner(false);
            })
            // .then(setSpinner(false))
            .catch(error => {
                console.error(error);
                setSpinner(false);
            });
    }, [from, to, dedate]);

    const {user} = useContext(UserContext);
    const rutaFavUserId = `favorite/${user?._id}`

    const [favedArray, setFavedArray] = useState([])
    useEffect( () => {
        if (user?._id !== undefined) {
        customFetch("GET", rutaFavUserId)
        .then((json) => {
            setFavedArray(json);
        }).catch(error => {
            console.error(error);
        });}
    }, [user, rutaFavUserId]);

    const hint = () => {
        Swal.fire(
            'No results?',
            'Try searching flights from Barcelona to London from 15/03/2022 to 22/03/2022.',
            'question'
          )
    }
    
    return (
        <div className="wrapper">
            <NavBar/>
            <div className="results-page">
                <Sidebar filters={filters} setFilters={setFilters} maxPrice={maxPrice}/>
                <div className="right-section">
                    <SearchHeader from={!deid ? from : to} to={!deid ? to : from} date={!deid ? dedate : retdate}/>
                    <TopBar setOrder={setOrder}/>
                    <div className="results-section">
                        
                        {spinner ? <div style={{display:"flex", justifyContent: "center", margin:"10%"}}><img alt="loading..." src={loading} height="60px" /></div> : <div>{flights.length === 0 ? 
                                <div className="no-results">
                                    <img src={noResultsFound} alt="No results found" className="no-results-logo"/>
                                    <h5>No flights found for this search</h5> 
                                    <p style={{fontSize:"18px"}} onClick={hint}>💡 Hint</p>
                                </div>
                                :
                                <Results 
                                    flights={flights} 
                                    filteredFlights={filteredFlights}
                                    order={order}
                                    favedArray={favedArray}
                                />
                            }
                            </div>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};  

export default ResultsPage