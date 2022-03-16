import React, { useEffect, useContext}from "react";
import { Link } from "react-router-dom";
import logo from "../../files/logo.png";
import { getUserToken } from "../../api/auth";
import "./navbar.css"
import Avatar from "../avatar/Avatar";
import { UserContext } from '../../context/userContext';
import jwt_decode from "jwt-decode";
import customFetch from "../../api";

const NavBar = () => {

    //const [currentUser, setCurrentUser]= useState(null);
    const {user, setUser,  reloadUser} = useContext(UserContext);

    useEffect(() => {
        const usertoken = getUserToken();

        if (usertoken) {
          
          const decoded = jwt_decode(usertoken);
          customFetch("GET", `profile/${decoded.id}`)
          .then((json) => {
            setUser(json);
          })
          .catch((error) => {
            console.log(error);
          })
        }
    }, [reloadUser, setUser]);

    return (
        <div className="header">
            <div>
                <Link to="/" >
                    <img className="logo" src={logo} alt="logo"/>
                </Link>
            </div>
            {user ? 
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