import React , {useContext, useState, useEffect} from 'react';
import ProfileIcon from '../icons/ProfileIcon'
import TravelerIcon from '../icons/TravelerIcon';
import ArrowIcon from '../icons/ArrowIcon';
import './profileSidebar.css';
import travel from "../../files/travel.png";
import AccountData from '../../components/profileData/accountData/AccountData';
import BookingResult from '../../components/profileData/bookingResult/BookingResult';
import FavoriteResult from '../../components/profileData/favoriteResult/FavoriteResult';
import { UserContext } from '../../context/userContext';
import jwt_decode from "jwt-decode";
import customFetch from "../../api";
import { getUserToken } from "../../api/auth";
import { removeSession } from "../../api/auth";
import { useNavigate } from "react-router-dom";


const ProfileSidebar = ({setComponent}) => {
    const [showAccount, setShowAccount] = useState(false);
    const [showReservation, setShowReservation] = useState(false);
    const [showFavorite, setShowFavorite] = useState(false);
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);
    const token = getUserToken();
    const decoded = jwt_decode(token);

    useEffect(() => { 
        
        customFetch("GET", `profile/${decoded.id}`)
        
          .then((json) => {
            setUser(json);
          })
          .catch((error) => {
            console.log(error);
          })
      }, []);

    const Logout = () => {
        removeSession();
        navigate("/");
        
    }
    
    return (
        <section className="wrapper">
            <div className="profile">
                <TravelerIcon/>
                <div className="profile-text">
                    <span><strong>Hello,</strong></span>
                    <p>{user.firstname}</p>
                </div>
            </div>
            <div className="list">
                <div onClick={()=> setComponent('favorite')} className="option">
                    <div className="option-info">
                        <ProfileIcon/>
                        <p>Favorite flights</p>
                        {showFavorite === true &&
                        <FavoriteResult setShowFavorite={setShowFavorite}/>
                        }
                    </div>
                    <ArrowIcon/>
                </div>
                <div onClick={()=> setComponent('reservations')} className="option">
                    <div className='option-info'>
                        <ProfileIcon/>
                        <p>My reservations</p>
                        {showReservation === true &&
                        <BookingResult setShowReservation={setShowReservation}/>
                        }
                    </div>
                    <ArrowIcon/>
                </div>
                <div className="option" onClick={() => {setComponent('account')}}>
                    <div className="option-info">
                        <ProfileIcon/>
                        <p>My account</p>
                        {showAccount === true &&  
                        <AccountData setShowAccount={setShowAccount}/>
                        } 
                        <ArrowIcon/>
                    </div>
                </div>
                <button className="button-profile" onClick={ Logout }>Logout</button>
                <div> <img className="travel" src={ travel } alt="travel"/></div>
            </div>
        </section>
    );

}

export default ProfileSidebar;