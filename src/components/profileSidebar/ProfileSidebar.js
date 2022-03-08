import React , {useContext, useState, useEffect} from 'react';
import ProfileIcon from '../icons/ProfileIcon';
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
import Avatar from '../avatar/Avatar';
import {MdAirplaneTicket} from 'react-icons/md';
import {IoIosArrowForward} from 'react-icons/io';
import {BsFillBookmarkStarFill} from 'react-icons/bs';
import {GiPerson} from 'react-icons/gi';

const ProfileSidebar = ({component, setComponent}) => {
    const [showAccount, setShowAccount] = useState(false);
    const [showBooking, setShowBooking] = useState(false);
    const [showFavorite, setShowFavorite] = useState(false);
    const navigate = useNavigate();
    const {user, setUser, reloadUser} = useContext(UserContext);
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
      }, [reloadUser]);

    const Logout = () => {
        removeSession();
        navigate("/");
    }

    return (
        <section className="wrapper-profile-sidebar">
            <div className="profile">
                <div className="user-icon">
                     <Avatar user={user} />
                </div>
                <div className="profile-text">
                    <span>Hello,</span>
                    <p>{user.firstname + " " + user.lastname}</p>
                </div>
            </div>
            <div className="list">
                <div onClick={() => setComponent('favorite')} className="option">
                    <div className={`option-info ${component === 'favorite' ? "option-info-selected" : ""}`}>
                        <div className='option-logo'>
                            <BsFillBookmarkStarFill />
                        </div>
                        <p>Favorite flights</p>
                        {showFavorite &&
                        <FavoriteResult setShowFavorite={setShowFavorite}/>
                        }
                        <div className='option-arrow'>
                            <IoIosArrowForward />
                        </div>
                    </div>
                </div>
                <div onClick={()=> setComponent('bookings')} className="option">
                    <div className={`option-info ${component === 'bookings' ? "option-info-selected" : ""}`}>
                        <div className='option-logo'>
                            <MdAirplaneTicket />
                        </div>
                        <p>My reservations</p>
                        {showBooking &&
                            <BookingResult setShowReservation={setShowBooking}/>
                        }
                        <div className='option-arrow'>
                            <IoIosArrowForward />
                        </div>
                    </div>
                </div>
                <div className="option" onClick={() => {setComponent('account')}}>
                    <div className={`option-info ${component === 'account' ? "option-info-selected" : ""}`}>
                        <div className='option-logo'>
                            <GiPerson />
                        </div>
                        <p>My account</p>
                        {showAccount &&  
                            <AccountData setShowAccount={setShowAccount}/>
                        } 
                        <div className='option-arrow'>
                            <IoIosArrowForward />
                        </div>
                    </div>
                    <ArrowIcon/>
                </div>
                <button className="button-profile" onClick={Logout}>Logout</button>
                <div className="travel-div">
                    <img className="travel" src={ travel } alt="travel"/>
                </div>
            </div>
        </section>
    );

}

export default ProfileSidebar;