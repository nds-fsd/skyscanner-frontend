import React, {useState, useEffect}from "react";
import { Link } from "react-router-dom";
import "../header/header.css"

const Header = () => {


    const [currentUser, setCurrentUser]= useState(undefined);

    useEffect(() => {
        const user = localStorage.getItem("token");
        if (user) {
          setCurrentUser(user);
        }
      }, [currentUser]);
    const Logout = () => {
        localStorage.removeItem('token');
       setCurrentUser(null);
    }
    return (
        <div className="header">
            {currentUser ? 
            <>
            <button className="btn-1"onClick={ Logout }>Logout</button>
            
            </>
            :
            <>
            <div className="login"><p>Login</p></div>
            <div className="register"><Link to="/signup"><p>Register</p></Link></div>
            
            </>
        }
            
            
            
        </div>
    );
};

export default Header;