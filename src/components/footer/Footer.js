import React from 'react'
import instagram_logo from "../../images/social_media/instagram_logo.png";
import facebook_logo from "../../images/social_media/facebook_logo.png";
import twiter_logo from "../../images/social_media/twiter_logo.png";
import logo from "../../images/logo.png";
import './footer.css'

const Footer = () => {
  return (
    <div>
        <div className="footer-logo">
            <img src={logo} alt="logo"/>
        </div>
        <p className="footer-text">This is a Full Stack Development students project. Try searching flights from Barcelona to London from 15/03/2022 to 22/03/2022. 😉</p>
        <div className="footer-links">
          <a href="https://github.com/nds-fsd/skyscanner-frontend"><p className="footer-text">GitHub Frontend</p></a>
          <a href="mailto:fakeemail@skyreader.com"><p className="footer-text">Customer Support</p></a>
          <a href="https://github.com/nds-fsd/skyscanner-backend"><p className="footer-text">GitHub Backend</p></a>
        </div>
        <div className="footer-social-media">
            <a href="https://www.facebook.com/skyscanner/"><img src={facebook_logo} alt="Facebook logo"/></a>
            <a href="https://www.instagram.com/skyscanner/"><img src={instagram_logo} alt="Instagram, logo"/></a>
            <a href="https://www.twitter.com/skyscanner/"><img src={twiter_logo} alt="Twiter logo" /></a>
        </div>
    </div>
  )
}

export default Footer