import React from 'react';import ProfileIcon from '../../components/icons/profile-icon'
import TravelerIcon from '../../components/icons/traveler-icon';
import CositoIcon from '../../components/icons/cosito-icono';
import './profile.sidebar.css'

const ProfileSidebar = () => {


  return (
     <section className="wrapper">
                    <div className="profile">
                       <TravelerIcon/>
                        <div className="profile-text">
                            <span><strong>Hello,</strong></span>
                            <p>carolinamarianela@hotmail.com</p>
                        </div>
                    </div>
                    <div className="list">
                        <div className="option">
                            <div className="option-info">
                                <ProfileIcon/>
                                <p>Favorite flights</p>
                            </div>
                            <CositoIcon/>
                        </div>
                        <div className="option">
                            <div className='option-info'>
                                <ProfileIcon/>
                                <p>My reservations</p>
                            </div>
                            <CositoIcon/>
                        </div>
                        <div className="option">
                            <div className="option-info">
                            <ProfileIcon/>
                                <p>My account</p>
                            </div>
                            <CositoIcon/>
                        </div>
                        <button className="btn-1">Logout</button>
                    </div>
            </section>

  );
}
export default ProfileSidebar;