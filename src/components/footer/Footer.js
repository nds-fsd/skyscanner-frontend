import React from 'react'
import instagram_logo from "../../images/instagram_logo.png";
import facebook_logo from "../../images/facebook_logo.png";
import twiter_logo from "../../images/twiter_logo.png";
import logo from "../../images/logo.png";
import './footer.css'

const Footer = () => {
  return (
    <div>
        <div className="footer-logo">
            <img src={logo} alt="logo"/>
        </div>
        <p className="footer-text">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque aliquam curabitur cociis.</p>
        <div className="footer-social-media">
            <img src={facebook_logo} alt="Facebook logo"/>
            <img src={instagram_logo} alt="Instagram, logo"/>
            <img src={twiter_logo} alt="Twiter logo" />
        </div>
    </div>
  )
}

export default Footer