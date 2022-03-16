import React, {useContext, useEffect, useState} from 'react';
import "./bookingResult.css";
import { UserContext } from '../../../context/userContext';
import FlightsTable from '../../flightsTable/FlightsTable';
import customFetch from '../../../api';

const BookingResult = (props) => {
  const {user} = useContext(UserContext);
  const [bookedFlights, setBookedFlights] = useState([])
  const [spinner, setSpinner] = useState(false); 
  const {setModalIsOpen, setSelectedFlight} = props;
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    setSpinner(true);
    customFetch("GET", `booking/${user?._id}`)
        .then((bookings) => {
            setBookedFlights(bookings);
            setSpinner(false);
        })
        .catch((err) => {
            console.error(err);
            setSpinner(false);
          }
        )
}, [user?._id, deleted])

  return (
      <section className="bookings-container">
          <h2 className='header-bookings'>Your bookings</h2>
          {spinner ? <p>Loading booked flights ...</p> : <div className="bookings">{bookedFlights.length === 0 ?
              <p className='no-bookings'>Sorry, we can't show you any flights yet.</p>
            : 
              <FlightsTable flights={bookedFlights} setModalIsOpen={setModalIsOpen} setSelectedFlight={setSelectedFlight} type={"booking"} setDeleted={setDeleted}/>
            }</div>
            }
      </section>
  );
}

export default BookingResult;