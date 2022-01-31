import React from "react";
import "../header/header.css"
import { Link, matchRoutes, useLocation } from 'react-router-dom';

const Header = (props) => {

    const {routes} = props;

    let location = useLocation();
    let routeMatches = matchRoutes(routes, location);

    return (
        <div className="header">
            <div className="logo">
                <h2>Skyscanner</h2>
            </div>
            <div className="navbar">
                <Link className="login link" to="/login">Login</Link>
                <Link className="register link" to="/register">Register</Link>
            </div>
            
        </div>
    );
};

export default Header;