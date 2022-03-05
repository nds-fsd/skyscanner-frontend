import React from 'react';
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

const ReturnFlightPage = () => {
    const searchParams = useParams();
    const {from, to, dedate, retdate, outboundFlightUnparsed} = searchParams;
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

    return (
        <div className="return-page-container">
            <SearchHeader from={to} to={from} date={retdate}/>
            <div className="selected-flight">
                <h3 className="flight-direction">Ida<span className="date">{moment(selectedFlightParsed.dedate).format('LLLL')}</span></h3>
                <div className="flight selected">
                    <FlightCard 
                        flight={selectedFlightParsed} 
                        searchParams={searchParams}
                        selected={true} />
                </div>
            </div>
            <div className="selected-flight">
                <h3 className="flight-direction">Vuelta</h3>
                {returnFlights.length === 0 ? <div className="flight">
                    <h5 className="no-return-info">No has seleccionado ningun vuelo de vuelta, si quieres añadir uno dale al boton y te encontraremos el vuelo perfecto para ti</h5>
                    <button className="search-btn" onClick={handleClick}>Buscar vuelos de vuelta</button>
                </div> : 
                <Results flights={returnFlights} filteredFlights={[]} order={"cheapest"}/> }
            </div>
            <Footer />
        </div>
    )
}

export default ReturnFlightPage