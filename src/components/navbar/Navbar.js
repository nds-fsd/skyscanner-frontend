import React, {useState, useEffect, useContext}from "react";
import { Link } from "react-router-dom";
import logo from "../../files/logo.png";
import { getUserToken } from "../../api/auth";
import "./navbar.css"
import Avatar from "../avatar/Avatar";
import { UserContext } from '../../context/userContext';

const NavBar = () => {

    const [currentUser, setCurrentUser]= useState(null);
    const {user} = useContext(UserContext);

    useEffect(() => {
        const usertoken = getUserToken();
        if (usertoken) {
          setCurrentUser(usertoken);
        }
    }, [currentUser]);

      
    return (
        <div className="header">
            <div>
                <Link to="/" >
                    <img className="logo" src={logo} alt="logo"/>
                </Link>
            </div>
            {currentUser ? 
            <>
                <div className="navbar-icon">
                    <Link to="/profile">
                        <Avatar user={user} />
                    </Link>
                </div>
            
            </>
            :
            <>
                <div className="login">
                    <Link to="/login">
                        <p>Login</p>
                    </Link>
                </div>
                <div className="register">
                    <Link to="/signup">
                        <p>Register</p>
                    </Link>
                </div>
            </>
        } 
        </div>
    );
};

export default NavBar;