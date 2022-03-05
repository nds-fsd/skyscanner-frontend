import React from 'react';
//import { useNavigate } from "react-router-dom";
import { useState} from 'react';
import './profile.css';
import ProfileSidebar from '../../components/profileSidebar/ProfileSidebar';
import BookingResult from '../../components/profileData/bookingResult/BookingResult';
import FavoriteResult from '../../components/profileData/favoriteResult/FavoriteResult';
import AccountData from '../../components/profileData/accountData/AccountData';
import NavBar from "../../components/navbar/Navbar";


const Profile = () => {
    // const [currentProfile, setCurrentProfile]= useState(undefined);
    const [component, setComponent]= useState('');
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
            return <BookingResult/>;
        case 'favorite':
            return <FavoriteResult/>;
        default:
      }
    }
      
    return (
        <section className='profile-wrapper'>
            <div className='side-bar'>
                <ProfileSidebar component={component} setComponent={setComponent} />
            </div>
            <div className='options'>
              {renderSwitch(component)}
            </div>
        </section>
    );
  };
  
  export default Profile;