import React from "react";
import logo from "../../files/logo.png"
import "../header/header.css"

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Skyreader" className="logo"/>
            <div className="login"><p>Login</p></div>
            <div className="register"><p>Register</p></div>
        </div>
    );
};

export default Header;