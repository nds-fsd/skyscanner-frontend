import React, {useState} from 'react';
import './acount-data.css';
import ArrowIcon from '../icons/arrow-icono';
import Modal from './modal-aeroport';


const AccountData = () => {
    const [showModal, setShowModal] = useState(false);


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
           <p>gallegos.carolina@outlook.com</p>
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
               <p className='titile-aeroport'>Preferred Origin Airports</p>
               <p className='info-aeroport'>Enter the airports you prefer so we can find the best deals and ideas for you.</p>
               {showModal}
               <h6>Airports of origin (6 maximum)</h6>
               <button onClick={() => {setShowModal(true)}} className="button-profile" type="button">Add an airport</button>
               {showModal === true &&  
                <Modal setShowModal={setShowModal}/>
		    } 
            
           </div>

       </div>
       <div className='account'>
       <div className='header-title-profile'>
               <p>Cuenta</p>
           </div>
           <div className='remove-account-profile'>Eliminar cuenta<ArrowIcon/></div>

       </div>
    </section>
  );
}
export default AccountData;