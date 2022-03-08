import React from 'react';
//import { useNavigate } from "react-router-dom";
import { useState} from 'react';
import './profile.css';
import ProfileSidebar from '../../components/profileSidebar/ProfileSidebar';
import BookingResult from '../../components/profileData/bookingResult/BookingResult';
import FavoriteResult from '../../components/profileData/favoriteResult/FavoriteResult';
import AccountData from '../../components/profileData/accountData/AccountData';
import Modal from '../../components/modal/Modal';
import SimpleFlightCard from '../../components/flightCard/SimpleFlightCard';


const Profile = () => {
    // const [currentProfile, setCurrentProfile]= useState(undefined);
    const [component, setComponent]= useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedFlight, setSelectedFlight] = useState({
          from: "",
          to: "",
          dedate: "",
          flighttime: 0, 
          price: 0,
          airline: ""
    });
    //const navigate = useNavigate();

    // useEffect(() => {
    //     const user = localStorage.getItem("token");
    //     if (user) {
    //         setCurrentProfile(user);
    //         console.log("donde estas user", user)
    //     }
    //   }, [currentProfile]);
    
    const renderSwitch = () => {
      switch(component) {
        case 'account':
            return <AccountData />;
        case 'bookings':
            return <BookingResult setModalIsOpen={setModalIsOpen} setSelectedFlight={setSelectedFlight}/>;
        case 'favorite':
            return <FavoriteResult setModalIsOpen={setModalIsOpen} setSelectedFlight={setSelectedFlight}/>;
        default:
      }
    }

    const closeModal = () => {
      setModalIsOpen(false);
    }
      
    return (
        <section className='profile-wrapper'>
            <div className='side-bar'>
                <ProfileSidebar component={component} setComponent={setComponent} />
            </div>
            <div className='options'>
              {renderSwitch(component)}
            </div>
            {modalIsOpen && <Modal open={modalIsOpen} handleCloseModal={closeModal} children={<SimpleFlightCard flight={selectedFlight} />}/>} 
        </section>
    );
  };
  
  export default Profile;