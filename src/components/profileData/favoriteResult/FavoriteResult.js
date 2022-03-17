import React, {useContext, useEffect, useState} from 'react';
import "./favoriteResult.css";
import { UserContext } from '../../../context/userContext';
import FlightsTable from '../../flightsTable/FlightsTable';
import customFetch from '../../../api';

const FavoriteResult = (props) => {
    const {user} = useContext(UserContext);
    const [favoriteFlights, setFavoriteFlights] = useState([])
    const [spinner, setSpinner] = useState(false);
    const {setModalIsOpen, setSelectedFlight} = props;
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        setSpinner(true);
        customFetch("GET", `favorite/${user?._id}`)
            .then((favs) => {
                setFavoriteFlights(favs)
                setSpinner(false);
            })
            .catch((err) => {
                console.error(err);
                setSpinner(false);
            })
    }, [user?._id, deleted])

    return (
        <section className="favorite-container">
            <h2 className='header-favorite'>Favorite flights</h2>
            {spinner ? <p>Loading favorite flights ...</p> : <div className="bookings">{favoriteFlights.length === 0 ?
                    <p className='no-favorites'>You don't have any favorite flights</p>
                : 
                    <FlightsTable flights={favoriteFlights} setModalIsOpen={setModalIsOpen} setSelectedFlight={setSelectedFlight} type={"favorite"} setDeleted={setDeleted}/>
              }</div>}
        </section>
    );
}

export default FavoriteResult;