import React, {useState, useEffect}from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../files/logo.png";
<<<<<<< HEAD:src/components/Navbar/navbar.js
import "../Navbar/navbar.css"
=======
import {removeSession} from "../../api/auth";
import { getUserToken } from "../../api/auth";
import TravelerIcon from "../icons/TravelerIcon";
import "./navbar.css"
>>>>>>> 84bb71d6bcc69f9f1ed31e3c62a654b838ff5c73:src/components/navbar/Navbar.js

const NavBar = () => {

    const [currentUser, setCurrentUser]= useState(null);
    const navigate = useNavigate();

    useEffect(() => {
<<<<<<< HEAD:src/components/Navbar/navbar.js
        const user = localStorage.getItem("token");
=======
        const user = getUserToken();
>>>>>>> 84bb71d6bcc69f9f1ed31e3c62a654b838ff5c73:src/components/navbar/Navbar.js
        if (user) {
          setCurrentUser(user);
        }
      }, [currentUser]);
<<<<<<< HEAD:src/components/Navbar/navbar.js
    const Logout = () => {
        localStorage.removeItem('token');
        setCurrentUser(null);
    }
=======
      /*const Logout = () => {
        removeSession();
        navigate("/");
        setCurrentUser(null);
      }*/

>>>>>>> 84bb71d6bcc69f9f1ed31e3c62a654b838ff5c73:src/components/navbar/Navbar.js
    return (
        <div className="header">
            <div>
            <Link to="/" ><img className="logo" src={logo} alt="logo"/></Link>

            </div>
            {currentUser ? 
            <>
<<<<<<< HEAD:src/components/Navbar/navbar.js
            <button className="btn-1"onClick={ Logout }>Logout</button>
=======
                <div className="navbar-icon">
                    <Link to="/profile">
                        <TravelerIcon />
                    </Link>
                </div>
>>>>>>> 84bb71d6bcc69f9f1ed31e3c62a654b838ff5c73:src/components/navbar/Navbar.js
            
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