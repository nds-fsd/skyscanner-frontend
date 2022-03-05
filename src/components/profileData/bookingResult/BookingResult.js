import React, {useContext} from 'react';
import reservation from "../../../files/reservation.png";
import "./bookingResult.css";
import { UserContext } from '../../../context/userContext';
import FlightsTable from '../../flightsTable/FlightsTable';

const BookingResult = (props) => {
  const {user} = useContext(UserContext);
  const favoriteFlights = user.bookings;
  const {setModalIsOpen, setSelectedFlight} = props;

  return (
      <section className="bookings-container">
          <h2 className='header-bookings'>Your reservations</h2>
          {favoriteFlights.length === 0 ?
            <div>
                <img src={reservation} className='image-reservation'/>
                <p className='no-bookings'>Sorry, we can't show you any flights yet.</p>
            </div> : 
            <FlightsTable flights={favoriteFlights} setModalIsOpen={setModalIsOpen} setSelectedFlight={setSelectedFlight} />
            }
      </section>
  );
}

export default BookingResult;