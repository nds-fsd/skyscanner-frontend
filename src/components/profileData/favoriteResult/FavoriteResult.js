import React, {useContext, useEffect} from 'react';
import reservation from "../../../files/reservation.png";
import "./favoriteResult.css";
import { UserContext } from '../../../context/userContext';
import FlightsTable from '../../flightsTable/FlightsTable';

const FavoriteResult = (props) => {
    const {user} = useContext(UserContext);
    const favoriteFlights = user.fav;
    const {setModalIsOpen, setSelectedFlight} = props;

    return (
        <section className="favorite-container">
            <h2 className='header-favorite'>Your favorite flights</h2>
            {favoriteFlights.length === 0 ?
              <div>
                  <img src={reservation} className='image-reservation'/>
                  <p className='no-favorites'>You don't have any favorite flights</p>
              </div> : 
              <FlightsTable flights={favoriteFlights} setModalIsOpen={setModalIsOpen} setSelectedFlight={setSelectedFlight} />
              }
        </section>
    );
}

export default FavoriteResult;