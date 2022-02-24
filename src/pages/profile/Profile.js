import React from 'react';
//import { useNavigate } from "react-router-dom";
import { useState} from 'react';
import NavBar from '../../components/Navbar/navbar';
import './Profile.css';
import ProfileSidebar from './profile.sidebar';
import AccountData from '../../components/profile-data/account-data';
import Reservation from '../../components/profile-data/reservation-result';
import FavoriteResult from '../../components/profile-data/favorite-result';



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
            return <AccountData/>;
          case 'reservations':
             return <Reservation/>;
          case 'favorite':
            return <FavoriteResult/>;
            default:}
      }
      
    return (
     
        <section className='profile-wrapper'>
          <NavBar/>
            <div className='side-bar'><ProfileSidebar setComponent={setComponent} /></div>
            <div className='options'>
              {renderSwitch(component)}
            </div>
        </section>
    );
  };
  
  export default Profile;