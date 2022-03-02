import React, {useContext, useState} from 'react';
import './acount-data.css';
import ArrowIcon from '../icons/arrow-icono';
import Modal from './modal-aeroport';
import ModalRemove from './modal-remove';
import ModalEdit from './modal-edit';
import { UserContext } from '../../context/userContext';
import ModalPassword from './modal-password';

const AccountData = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalRemove, setShowModalRemove] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalPassword, setShowModalPassword] = useState(false);

    const {user} = useContext(UserContext);
    console.log(user);

    
    
  return (
   <section className='account-data-container'>
       <div>
           <p className='header-account-data'>Account</p>
       </div>
       <div className='information'>
           <div className='header-title-profile'>
               <p>General information</p>
           </div>
           <p className='email-information'>Email address</p>
           <p>{user.email}</p>
        </div>
       <div className='suscription'>
            <div className='header-title-profile'>
               <p>Subscriptions</p>
            </div>
            <div className='checkbox-container'>
                <input type="checkbox" className='checkbox-style'/>
                <p className="option-checkbox">I would like to receive the latest travel deals, news and tips by email.</p>
            </div>
            <div>
               <p className='titile-aeroport'>Preferred Origin Airport</p>
               <p className='info-aeroport'>Enter the airport you prefer so we can find the best deals and ideas for you.</p>
               {showModal}
               <h6>Airport of origin</h6>
               { user.prefairport ?
               <>
               <p className='info-aeroport'> {user.prefairport} </p>
               <button onClick={() => {setShowModal(true)}} className="button-profile" type="button">Change your preferred airport</button> 
               </> :
               <button onClick={() => {setShowModal(true)}} className="button-profile" type="button">Add an airport</button> 
              }
               {showModal === true &&  
                <Modal setShowModal={setShowModal}/>
		    } 
            </div>
        </div>
        <div className='account'>
            <div className='header-title-profile'>
               <p>Account</p>
            </div>
            <div className='remove-account-profile' onClick={() => {setShowModalRemove(true)}}>Remove account<ArrowIcon/></div>
                {showModalRemove === true &&  
                <ModalRemove setShowModalRemove={setShowModalRemove}/>
		    } 
           <div className='edit-account' onClick={() => {setShowModalEdit(true)}}>Edit<ArrowIcon/></div>
           {showModalEdit === true &&  
                <ModalEdit setShowModalEdit={setShowModalEdit}/>
		    }  
            <div className='change-password' onClick={() => {setShowModalPassword(true)}}>Change your password<ArrowIcon/></div>
           {showModalPassword === true &&  
                <ModalPassword setShowModalPassword={setShowModalPassword}/>
		    }  
        </div>
    </section>
  );
}
export default AccountData;