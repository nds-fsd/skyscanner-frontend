import React, {useContext, useState} from 'react';
import './accountData.css';
import ArrowIcon from '../../icons/ArrowIcon';
import Modal from '../../modal/modalAeroport/modal-aeroport';
import ModalRemove from '../../modal/modalRemove/modal-remove';
import ModalEdit from '../../modal/modalEdit/modal-edit';
import ModalChangePwd from '../../modal/modalChangePwd/ModalChangePwd';
import { UserContext } from '../../../context/userContext';

const AccountData = () => {
    const [showModal, setShowModal] = useState(false);
    const [showModalRemove, setShowModalRemove] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalChangePwd, setShowModalChangePwd] = useState(false);
    const {user} = useContext(UserContext);
    
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
                <span className='email-information'>Email address</span>
                <p>{user.email}</p>
            </div>
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
                <span className='info-aeroport'>Enter the airport you prefer so we can find the best deals and ideas for you.</span>
                {/*showModal No entiendo que hace esto*/}
                <div className='favorite-airport'>
                    <h4>Airport of origin</h4>
                    { user.prefairport ?
                        <p className='info-aeroport'>{user.prefairport}</p> : <p className='info-aeroport'>No airport selected</p>
                    }
                    <button onClick={() => {setShowModal(true)}} className="change-airport-btn" type="button">Change your preferred airport</button> 
                </div>
                {showModal === true &&  
                    <Modal setShowModal={setShowModal}/>
                } 
            </div>
        </div>
            <div className='account'>
                <div className='header-title-profile'>
                    <p>Account</p>
                </div>
                <div className='account-option' onClick={() => {setShowModalRemove(true)}}>Remove account<ArrowIcon/></div>
                    {showModalRemove === true &&  
                        <ModalRemove setShowModalRemove={setShowModalRemove}/>
                    } 
                <div className='account-option' onClick={() => {setShowModalEdit(true)}}>Edit<ArrowIcon/></div>
                {showModalEdit === true &&  
                    <ModalEdit setShowModalEdit={setShowModalEdit}/>
                }
                <div className='account-option' onClick={() => {setShowModalChangePwd(true)}}>Change password<ArrowIcon/></div>
                {showModalChangePwd === true &&  
                    <ModalChangePwd setShowModalChangePwd={setShowModalChangePwd}/>
                }
            </div>
        </section>
  );
}
export default AccountData;