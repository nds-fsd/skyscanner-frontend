import React, {useState, useEffect}from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../files/logo.png";
import {removeSession} from "../../api/auth";
import { getUserToken } from "../../api/auth";
import customFetch from "../../api"
import "./navbar.css"
import Avatar from "../avatar/Avatar";
import jwt_decode from "jwt-decode";
import mockUser from "../../data/user.json";

const NavBar = () => {

    const [currentUser, setCurrentUser]= useState(mockUser);
    const navigate = useNavigate();

    useEffect(() => {
        const user = getUserToken();
        console.log(jwt_decode(user).id)
        if (user) {
          customFetch("GET", `profile/${jwt_decode(user).id}`)
            .then(u => setCurrentUser(u))
            .catch(err => console.error(err));
        }
    }, []);

    /*const Logout = () => {
    removeSession();
    navigate("/");
    setCurrentUser(null);
    }*/

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
                        <Avatar user={currentUser} />
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