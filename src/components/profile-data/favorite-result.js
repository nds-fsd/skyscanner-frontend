import React from 'react';
import reservation from "../../files/reservation.png";
import "./favorite-result.css";


const FavoriteResult = () => {
  return (
    <section className="favorite-container">
      <div>
        <p className='header-favorite'>Your favorites flights</p>
      </div>
      <div>
        <img src={ reservation } className='image-reservation'/>
        <p>You don't have any favorite flights</p>
      </div>  
    </section>
  );
}
export default FavoriteResult;