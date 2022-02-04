import React, {useState, useEffect}from "react";
import { Link } from "react-router-dom";
import logo from "../../files/logo.png";
import "../Navbar/navbar.css"

const NavBar = () => {

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
            <div>
            <Link to="/" ><img className="logo" src={logo} alt="logo"/></Link>

            </div>
            {currentUser ? 
            <>
            <button className="btn-1"onClick={ Logout }>Logout</button>
            
            </>
            :
            <>
            <div className="login"><Link to="/login"><p>Login</p></Link></div>
            <div className="register"><Link to="/signup"><p>Register</p></Link></div>
            
            </>
        }
            
        </div>
    );
};

export default NavBar;