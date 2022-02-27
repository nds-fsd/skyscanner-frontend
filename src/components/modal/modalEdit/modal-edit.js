import React from 'react';
import "./modal-edit.css";

const ModalEdit = ({setShowModalEdit }) => (
    <div className="modal-edit-container">
        <div className="modal-edit"> 
            <span className="close" onClick={() => setShowModalEdit(false)}>x</span>
            <div className="bottom-modal-remove">
                <p className='Edit-info'>Edit your profile</p>
                
                <button type='submit' className='button-save-remove'>Save</button>
                <button type='submit' className='button-save-remove'>Cancel</button>
            </div>
      
        </div>
    </div>
);

export default ModalEdit;