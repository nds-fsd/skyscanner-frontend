import React, {useContext, useState} from 'react';
import './accountData.css';
import ArrowIcon from '../../icons/ArrowIcon';
import Modal from '../../modal/modalAeroport/modal-aeroport';
import ModalRemove from '../../modal/modalRemove/modal-remove';
import ModalEdit from '../../modal/modalEdit/modal-edit';
import ModalChangePwd from '../../modal/modalChangePwd/ModalChangePwd';
import { UserContext } from '../../../context/userContext';
import Swal from 'sweetalert2';

const AccountData = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalRemove, setShowModalRemove] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalChangePwd, setShowModalChangePwd] = useState(false);
    const {user} = useContext(UserContext);
    const fullName = user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1) + " " + user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1);

    const [newsletterSub, setNewsletterSub] = useState(false)
    const newsletter = () => {
        if(newsletterSub === false) {
            setNewsletterSub(true)
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'You will receive our newsletters!',
                showConfirmButton: false,
                timer: 1500,
                padding: '0.50em',
                width: '18rem',
                timerProgressBar: true
              })
        }
        if(newsletterSub === true) {
            setNewsletterSub(false)
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'You will no longer receive our newsletter 😔',
                showConfirmButton: false,
                timer: 1500,
                padding: '0.50em',
                width: '18rem',
                timerProgressBar: true
              })
        }
        
    }

    return (
    <section className='account-data-container'>
        <div className='header-account-data'>
            <p>Account</p>
            <span>Here you can configure your account</span>
        </div>
        <div className='information'>
            <div className='header-title-profile'>
                <p>General information</p>
            </div>
            <div className='information-data'>
                <span className='email-information'>Name</span>
                <div className="edit-name">
                    <div><p>{fullName}</p></div>
                    <div className="emoji-edit" onClick={() => {setShowModalEdit(true)}}>🖊️</div>
                    {showModalEdit === true &&  
                        <ModalEdit setShowModalEdit={setShowModalEdit}/>
                    }
                </div>
                <span className='email-information'>Email address</span>
                <p>{user.email}</p>
            </div>
            </div>
        <div className='suscription'>
            
            <div>
                <div className='header-title-profile'><p>Preferred Origin Airport</p></div>
                <span className='info-aeroport'>Enter the airport you prefer so we can find the best deals and ideas for you.</span>
                <h6 className="airport-title">Airport of origin</h6>
                <div className='favorite-airport'>
                    { user.prefairport ?
                        <p className='info-aeroport'>{user.prefairport.toLowerCase().replace(/\s/g, '')}</p> : <p className='info-aeroport'>No airport selected</p>
                    }
                    <button onClick={() => {setShowModal(true)}} className="change-airport-btn" type="button">Change your preferred airport</button> 
                </div>
                {showModal === true &&  
                    <Modal setShowModal={setShowModal}/>
                } 
            </div>
            <div className='header-title-profile'>
                <p>Newsletter</p>
            </div>
            <div className='checkbox-container'>
                <input type="checkbox" className='checkbox-style'onClick={newsletter}/>
                <p className="option-checkbox">I would like to receive the latest travel deals, news and tips by email.</p>
            </div>
        </div>
            <div className='account'>
                <div className='header-title-profile'>
                    <p>Account</p>
                </div> 
                {/* <div className='account-option' onClick={() => {setShowModalEdit(true)}}>Edit<ArrowIcon/></div>
                {showModalEdit === true &&  
                    <ModalEdit setShowModalEdit={setShowModalEdit}/>
                } */}
                <div className='account-option' onClick={() => {setShowModalChangePwd(true)}}>Change password<ArrowIcon/></div>
                {showModalChangePwd === true &&  
                    <ModalChangePwd setShowModalChangePwd={setShowModalChangePwd}/>
                }
                <div className='account-option-remove' onClick={() => {setShowModalRemove(true)}}>Delete account<ArrowIcon/></div>
                {showModalRemove === true &&  
                    <ModalRemove setShowModalRemove={setShowModalRemove}/>
                }
            </div>
        </section>
  );
}
export default AccountData;