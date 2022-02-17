import React from 'react';
import './modal-aeroport.css';
import aeroportImage from "../../files/aeroportImage.png";

const Modal = ({setShowModal }) => (
  <div className="modal-container">
      <div className="modal"> 
      <span className="close" onClick={() => setShowModal(false)}>x</span>
        <img className="aeroportImage" src={ aeroportImage } alt="aeroportImage" />
        <div className="bottom-modal">
            <h2>Manage your airports of origin</h2>
            <p className='favorite-aeroport1'>Tell us where you want to fly from so we can show you the most interesting offers and ideas for you.</p>
            <div>
                <p className='aeroport-origin'>Airports of origin (6 maximum)</p>
            <input type="text" className='input-aeroport'/>
            <button type='submit' className='button-save-aeroport'>Save</button>
            </div>
        </div>
      
      </div>
  </div>
);

export default Modal;