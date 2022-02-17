import React , {useState} from 'react';
import ProfileIcon from '../../components/icons/profile-icon'
import TravelerIcon from '../../components/icons/traveler-icon';
import ArrowIcon from '../../components/icons/arrow-icono';
import './profile.sidebar.css';
import travel from "../../files/travel.png";
import AccountData from '../../components/profile-data/account-data';


const ProfileSidebar = ({setComponent}) => {
    const [showAccount, setShowAccount] = useState(false);
    // document.getElementById("optionInfo").style.display='block'


  return (
     <section className="wrapper">
                    <div className="profile">
                       <TravelerIcon/>
                        <div className="profile-text">
                            <span><strong>Hello,</strong></span>
                            <p>gallegos.carolina@outlook.com</p>
                        </div>
                    </div>
                    <div className="list">
                        <div onClick={()=> setComponent('favorite')} className="option">
                            <div className="option-info">
                                <ProfileIcon/>
                                <p>Favorite flights</p>
                            </div>
                            <ArrowIcon/>
                        </div>
                        <div onClick={()=> setComponent('reservations')} className="option">
                            <div className='option-info'>
                                <ProfileIcon/>
                                <p>My reservations</p>
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
                        <button className="button-profile">Logout</button>
                        <div> <img className="travel" src={ travel } alt="travel"/></div>
                    </div>
                   
            </section>

  );
}
export default ProfileSidebar;