import React, {useState, useEffect}from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../files/logo.png";
import {removeSession} from "../../api/auth";
import { getUserToken } from "../../api/auth";
import TravelerIcon from "../icons/TravelerIcon";
import "./navbar.css"

const NavBar = () => {

    const [currentUser, setCurrentUser]= useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const user = getUserToken();
        if (user) {
          setCurrentUser(user);
        }
      }, [currentUser]);
      const Logout = () => {
        removeSession();
        navigate("/");
        setCurrentUser(null);
      }

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
                        <TravelerIcon />
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