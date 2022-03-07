import React from 'react';
import './bookingPage.css';
import {useState} from 'react';
import FlightCard from '../../components/flightCard/FlightCard'
import Footer from '../../components/footer/Footer';
import SearchHeader from '../../components/searchHeader/SearchHeader';
import { useParams, useNavigate } from 'react-router';
import moment from 'moment';
import flights from '../../data/flights-data.json';
import Results from '../../components/results/Results';
import Modal from '../../components/modal/Modal';

const BookingPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const {outboundFlightUnparsed, returnFlightUnparsed} = params;
    const outboundFlight = outboundFlightUnparsed ? JSON.parse(params?.outboundFlightUnparsed) : undefined;
    const returnFlight = returnFlightUnparsed ? JSON.parse(params?.returnFlightUnparsed): undefined;
    const [bookingAccepted, setBookingAccepted] = useState(false);
    const totalPrice = outboundFlight.price * params.passangers + returnFlight.price * params.passangers;

    const handleClick = () => {
        navigate('/success');
    }

    return (
        <div className="return-page-container">
            <div>
                <div className="selected-flight">
                    <br/>
                    <h3 className="flight-direction-ida">Ida<span className="date">{moment(outboundFlight.dedate).format('LLLL')}</span></h3>
                    <div className="flight selected">
                        <FlightCard 
                            flight={outboundFlight} 
                            searchParams={params} />
                    </div>
                </div>
                <div className="selected-flight">
                    <h3 className="flight-direction">Vuelta<span className="date">{moment(returnFlight.dedate).format('LLLL')}</span></h3>
                    <div className="flight selected">
                        <FlightCard 
                            flight={returnFlight} 
                            searchParams={params} />
                    </div>
                </div>
                <div className="booking-subheader">
                    <h2 className="booking-total-price">Total: {totalPrice} €</h2>
                </div>
                <div className="booking-header">
                    <h1 className="booking-title">Your current flights selection</h1>
                    <button className="booking-btn" onClick={handleClick}>🔒 Book flights </button>
                </div>
            </div>
            <Footer />
        </div> 
    )
}

export default BookingPage