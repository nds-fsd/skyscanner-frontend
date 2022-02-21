import React from 'react';
import "./modal-remove.css";

const ModalRemove = ({setShowModalRemove }) => (
  <div className="modal-remove-container">
      <div className="modal-remove"> 
      <span className="close" onClick={() => setShowModalRemove(false)}>x</span>
        <div className="bottom-modal-remove">
            <h2>Are you sure you want to continue?</h2>
            <p className='remove-info'>
            Your entire account, including payment details, <br/>search history, price alerts, and favorite flights,<br/> will be deleted. Once removed, there will be no going back.</p>
            <button type='submit' className='button-save-remove'>Remove Account</button>
            <button type='submit' className='button-save-remove'>Cancel</button>
        </div>
      
      </div>
  </div>
);

export default ModalRemove;