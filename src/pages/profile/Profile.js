import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBar from '../../components/Navbar/navbar';
import './Profile.css';
import ProfileSidebar from './profile.sidebar';
import AccountData from '../../components/profile-data/account-data';



const Profile = () => {
    const [currentProfile, setCurrentProfile]= useState(undefined);
    const [component, setComponent]= useState('hola');
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("token");
        if (user) {
            setCurrentProfile(user);
            console.log("donde estas user", user)
        }
      }, [currentProfile]);
    
     
      const renderSwitch = (component) => {
        console.log(component)
        switch(component) {
          case 'account':
            return <AccountData />;
            // case 'account':
            // return <AccountData />;
          default:
            return 'foo';
        }
      }
      


    return (
        <section className='profile-wrapper'>
            <div className='side-bar'><ProfileSidebar setComponent={setComponent} /></div>
            {/* Aqui irian los componente condicionales */}
            <div className='options'>
                {renderSwitch(component)}
            </div>
        </section>
    );
  };
  
  export default Profile;