import React, {useContext, useEffect, useState} from 'react';
import reservation from "../../../files/reservation.png";
import "./bookingResult.css";
import { UserContext } from '../../../context/userContext';
import FlightsTable from '../../flightsTable/FlightsTable';
import customFetch from '../../../api';

const BookingResult = (props) => {
  const {user} = useContext(UserContext);
  const [bookedFlights, setBookedFlights] = useState([])
  const [spinner, setSpinner] = useState(false); 
  const {setModalIsOpen, setSelectedFlight} = props;

  useEffect(() => {
    let singleBookArray = [];
    setSpinner(true);
    customFetch("GET", `booking/${user._id}`)
        .then((bookings) => {
            setBookedFlights(bookings);
            setSpinner(false);
        })
        .catch(
          (err) => console.error(err)
        )
}, [])

  return (
      <section className="bookings-container">
          <h2 className='header-bookings'>Your bookings</h2>
          {spinner ? <p>Loading booked flights ...</p> : <div className="bookings">{bookedFlights.length === 0 ?
            <div>
                <img src={reservation} className='image-reservation'/>
                <p className='no-bookings'>Sorry, we can't show you any flights yet.</p>
            </div> : 
            <FlightsTable flights={bookedFlights} setModalIsOpen={setModalIsOpen} setSelectedFlight={setSelectedFlight} />
            }</div>
            }
      </section>
  );
}

export default BookingResult;