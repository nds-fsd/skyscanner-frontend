import React from "react";
import "./Header-page-two.css"
import "../files/images/logo.png"

const Header = () => {
    return (
        <div className="header">
            <img src="../files/images/logo.png" alt="Skyreader" className="logo"/>
            <div className="login"><p>Login</p></div>
            <div className="register"><p>Register</p></div>
        </div>
    );
};

export default Header;
