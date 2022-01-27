import React from "react";
import { Link } from "react-router-dom";
import "../header/header.css"

const Header = () => {
    return (
        <div className="header">
            
            <div className="login"><p>Login</p></div>
            <div className="register"><Link to="/signup"><p>Register</p></Link></div>
        </div>
    );
};

export default Header;