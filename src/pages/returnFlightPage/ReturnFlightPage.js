import React, { useContext, useEffect } from 'react';
import {useState} from 'react';
import FlightCard from '../../components/flightCard/FlightCard'
import Footer from '../../components/footer/Footer';
import SearchHeader from '../../components/searchHeader/SearchHeader';
import './returnFlightPage.css';
import { useParams } from 'react-router';
import moment from 'moment';
//import flights from '../../data/flights-data.json';
import Results from '../../components/results/Results';
import customFetch from '../../api';
import { UserContext } from '../../context/userContext';
import NavBar from '../../components/navbar/Navbar';

const ReturnFlightPage = () => {
    const searchParams = useParams();
    const {from, to, retdate, outboundFlightUnparsed} = searchParams;
    const [returnFlights, setReturnFlights] = useState([]);
    const selectedFlightParsed = JSON.parse(outboundFlightUnparsed);
    
    const handleClick = () => {
        //Fetch para buscar vuelos de vuelta
        //setReturnFlights(flights);
            customFetch("GET", `flights/search?from=${to}&to=${from}&dedate=${retdate}`)
            .then((json) => {
                console.log(json);
                setReturnFlights(json);
                
            }).catch(error => {
                console.error(error);
            });
       
    }


    const {user} = useContext(UserContext);
    const rutaFavUserId = `favorite/${user?._id}`

    const [favedArray, setFavedArray] = useState([])
    useEffect( () => {
        if (user._id !== undefined) {
        customFetch("GET", rutaFavUserId)
        .then((json) => {
            setFavedArray(json);
        }).catch(error => {
            console.error(error);
        });}
    }, [user, rutaFavUserId]);

    const fromCap = from.charAt(0).toUpperCase() + from.slice(1);
    const toCap = to.charAt(0).toUpperCase() + to.slice(1);

    return (
        <div className="return-page-container">
            <NavBar/>
            <SearchHeader from={to} to={from} date={retdate}/>
            <div className="selected-flight">
                <h3 className="flight-direction">Departure<span className="date">{moment(selectedFlightParsed.dedate).format('LLLL')}</span></h3>
                <div className="flight selected">
                    <FlightCard 
                        flight={selectedFlightParsed} 
                        searchParams={searchParams}
                        selected={true}
                        favedArray={favedArray}
                        />
                </div>
            </div>
            <div className="selected-flight">
                <h3 className="flight-direction">Return</h3>
                {returnFlights.length === 0 ? <div className="flight">
                    <h5 className="no-return-info">Do you want to search for return flights? <br/> Find the perfect flight from {toCap} to {fromCap} with one click!</h5>
                    <button className="search-btn" onClick={handleClick}>✈️ Find return flights</button>
                </div> : 
                <Results flights={returnFlights} filteredFlights={returnFlights} order={"cheapest"} favedArray={favedArray} /> }
            </div>
            <Footer />
        </div>
    )
}

export default ReturnFlightPage