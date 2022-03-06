import React from 'react';
import reservation from "../../../files/reservation.png";
import "./bookingResult.css"

const BookingResult = () => {
  return (
    <section className="reservation-container">
        <div>
            <p className='header-reservation'>Your reservations</p>
        </div>
        <div>
            <img src={ reservation } className='image-reservation'/>
        </div>
        <div>
        <p className='no-reservation'>Sorry, we can't show you any flights yet.</p>
        <p className='if-reservation'>To receive information about your reservation, check your confirmation email or contact the supplier.</p>
        </div>
    </section>
  );
}

export default BookingResult;