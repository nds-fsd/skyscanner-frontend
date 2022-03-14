import React, {useContext, useEffect, useState} from 'react';
import reservation from "../../../files/reservation.png";
import "./favoriteResult.css";
import { UserContext } from '../../../context/userContext';
import FlightsTable from '../../flightsTable/FlightsTable';
import customFetch from '../../../api';

const FavoriteResult = (props) => {
    const {user} = useContext(UserContext);
    const [favoriteFlights, setFavoriteFlights] = useState([])
    const [spinner, setSpinner] = useState(false);
    const {setModalIsOpen, setSelectedFlight} = props;

    useEffect(() => {
        setSpinner(true);
        customFetch("GET", `favorite/${user._id}`)
            .then((favs) => {
                setFavoriteFlights(favs)
                setSpinner(false);
            })
            .catch((err) => console.error(err))
    }, [])

    return (
        <section className="favorite-container">
            <h2 className='header-favorite'>Your favorite flights</h2>
            {spinner ? <p>Loading favorite flights ...</p> : <div className="bookings">{favoriteFlights.length === 0 ?
              <div>
                  <img src={reservation} className='image-reservation'/>
                  <p className='no-favorites'>You don't have any favorite flights</p>
              </div> : 
              <FlightsTable flights={favoriteFlights} setModalIsOpen={setModalIsOpen} setSelectedFlight={setSelectedFlight} />
              }</div>}
        </section>
    );
}

export default FavoriteResult;