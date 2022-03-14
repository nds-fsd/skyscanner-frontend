import React, { useContext } from 'react';
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
import { getUserToken } from '../../api/auth';
import customFetch from '../../api';
import { UserContext } from '../../context/userContext';


const BookingPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const {outboundFlightUnparsed, returnFlightUnparsed} = params;
    const outboundFlight = outboundFlightUnparsed ? JSON.parse(params?.outboundFlightUnparsed) : undefined;
    const returnFlight = returnFlightUnparsed ? JSON.parse(params?.returnFlightUnparsed): undefined;
    const [bookingAccepted, setBookingAccepted] = useState(false);
    const totalPrice = outboundFlight.price * params.passangers + returnFlight.price * params.passangers;

    const token = getUserToken()
    const {user} = useContext(UserContext);

    const handleClick = () => {
        const outboundBooking = {"booking": `${outboundFlight._id}`}
        const returnBooking = {"booking": `${returnFlight._id}`}
        !token ? navigate("/login") :
        customFetch("PUT", `profile/booking/${user._id}`, {body: outboundBooking })
        customFetch("PUT", `profile/booking/${user._id}`, {body: returnBooking })
        navigate('/success');
        console.log("fetch", {user})
    }



    return (
        <div className="return-page-container">
            <div>
                <div className="selected-flight">
                    <br/>
                    <h3 className="flight-direction-ida">Departure<span className="date">{moment(outboundFlight.dedate).format('LLLL')}</span></h3>
                    <div className="flight selected">
                        <FlightCard 
                            flight={outboundFlight} 
                            searchParams={params} />
                    </div>
                </div>
                <div className="selected-flight">
                    <h3 className="flight-direction">Return<span className="date">{moment(returnFlight.dedate).format('LLLL')}</span></h3>
                    <div className="flight selected">
                        <FlightCard 
                            flight={returnFlight} 
                            searchParams={params} />
                    </div>
                </div>
                <div className="booking-header">
                    <h2 className="booking-title">Your current flights selection:</h2>
                    <h1 className="booking-total-price">{totalPrice} €</h1>
                    <button className="booking-btn" onClick={handleClick}>🔒 Book flights </button>
                
                </div>
            </div>
            <Footer />
        </div> 
    )
}

export default BookingPage