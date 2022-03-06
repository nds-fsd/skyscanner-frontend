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
    
      const renderSwitch = (component) => {
          console.log(component);
        switch(component) {
          case 'account':
            return <AccountData />;
          case 'reservations':
             return <BookingResult/>;
          case 'favorite':
            return <FavoriteResult/>;
            default:}
      }
      
    return (
     
        <section className='profile-wrapper'>
           <NavBar/>
            <div className='side-bar'>
                <ProfileSidebar setComponent={setComponent} />
            </div>
            <div className='options'>
              {renderSwitch(component)}
            </div>
        </section>
    );
  };
  
  export default Profile;