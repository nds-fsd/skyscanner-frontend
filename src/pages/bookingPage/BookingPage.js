import React, { useContext, useEffect } from 'react';
import './bookingPage.css';
import FlightCard from '../../components/flightCard/FlightCard'
import Footer from '../../components/footer/Footer';
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
    const totalPrice = outboundFlight.price * params.passangers + returnFlight.price * params.passangers;

    const token = getUserToken()
    const {user} = useContext(UserContext);

    const handleClick = () => {
        const outboundBooking = {"user_id": `${user?._id}`, "flight_id": `${outboundFlight._id}`, "passangers": `${params.passangers}`}
        const returnBooking = {"user_id": `${user?._id}`, "flight_id": `${returnFlight._id}`, "passangers": `${params.passangers}`}
        !token ? navigate("/login") :
        customFetch("POST", `booking`, {body: outboundBooking })
        customFetch("POST", `booking`, {body: returnBooking })
        console.log("outbound", outboundBooking)
        navigate('/success');
    }
     



    //Checks if any flight is saved in user favorites
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
    }, [user]);


    return (
        <div className="return-page-container">
            <div>
                <div className="selected-flight">
                    <br/>
                    <h3 className="flight-direction-ida">Departure<span className="date">{moment(outboundFlight.dedate).format('LLLL')}</span></h3>
                    <div className="flight selected">
                        <FlightCard 
                            flight={outboundFlight} 
                            searchParams={params}
                            favedArray={favedArray}
                            />
                    </div>
                </div>
                <div className="selected-flight">
                    <h3 className="flight-direction">Return<span className="date">{moment(returnFlight.dedate).format('LLLL')}</span></h3>
                    <div className="flight selected">
                        <FlightCard 
                            flight={returnFlight} 
                            searchParams={params}
                            favedArray={favedArray}
                            />
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