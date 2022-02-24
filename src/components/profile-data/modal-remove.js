import React from 'react';
import "./modal-remove.css";
import jwt_decode from "jwt-decode";
import { useNavigate} from "react-router-dom";


const ModalRemove = ({setShowModalRemove }) => {

  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const navigate = useNavigate();
  console.log(decoded);
  const RemoveAccount = () =>{
    fetch(`http://localhost:3020/profile/${decoded.id}`, {
      method: "DELETE"
      
    })
            .then(res => res.json())
            .then(() => localStorage.removeItem('token'))
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
            <button type='submit' className='button-save-remove'>Cancel</button>
        </div>
      
      </div>
  </div>
);
};
export default ModalRemove;