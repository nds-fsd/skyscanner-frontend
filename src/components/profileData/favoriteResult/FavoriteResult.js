import React, {useContext} from 'react';
import reservation from "../../../files/reservation.png";
import "./favoriteResult.css";
import { UserContext } from '../../../context/userContext';
import FlightsTable from '../../flightsTable/FlightsTable';

const FavoriteResult = () => {
    const {user} = useContext(UserContext);
    const favoriteFlights = user.fav;

    return (
        <section className="favorite-container">
            <h2 className='header-favorite'>Your favorites flights</h2>
            {favoriteFlights.length === 0 ?
              <div>
                  <img src={reservation} className='image-reservation'/>
                  <p>You don't have any favorite flights</p>
              </div> : 
              <FlightsTable flights={favoriteFlights}  />
              }
        </section>
    );
}

export default FavoriteResult;