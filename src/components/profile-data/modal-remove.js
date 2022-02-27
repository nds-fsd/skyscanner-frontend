import React, {useContext, useState} from 'react';
import "./modal-remove.css";
import { useNavigate} from "react-router-dom";
import customFetch from "../../api";
import { removeSession } from "../../api/auth";
import { UserContext } from '../../context/userContext';


const ModalRemove = ({setShowModalRemove }) => {

  const navigate = useNavigate();
  //const [confirmDeleted, setConfirmDeleted] = useState(false);
  const {user} = useContext(UserContext);


  const RemoveAccount = () => {
    
   customFetch("DELETE", `profile/${user.id}`)
            //.then(res => res.json())
            .then(() => removeSession())
            .then(()=> navigate("/"))
            .then(()=> alert("deleted"))
            .catch(err => console.error(err))

  }
  

  return(

  <div className="modal-remove-container">
      <div className="modal-remove"> 
      <span className="close" onClick={() => setShowModalRemove(false)}>x</span>
        <div className="bottom-modal-remove">
            <h2>Are you sure you want to continue?</h2>
            <p className='remove-info'>
            Your entire account, including payment details, <br/>search history, price alerts, and favorite flights,<br/> will be deleted. Once removed, there will be no going back.</p>
            <button type='submit' className='button-save-remove' onClick={RemoveAccount}>Remove Account</button>
            <button type='submit' className='button-save-remove' onClick={() => setShowModalRemove(false)}>Cancel</button>
        </div>
      
      </div>
  </div>
);
};
export default ModalRemove;