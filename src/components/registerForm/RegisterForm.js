import React, {useRef, useState, useContext} from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import customFetch from "../../api";
import { setUserSession, getUserToken } from "../../api/auth";
import "./registerForm.css";
import { UserContext } from "../../context/userContext";
import jwt_decode from "jwt-decode";

const Register = () => {
  const navigate = useNavigate();
  const password = useRef({});
  const {setUser} = useContext(UserContext);
  const [notRegistered, setNotRegistered] = useState(false);
  const {register, handleSubmit, watch} = useForm({mode: 'onTouched', shouldUseNativeValidation: true});
  
  password.current = watch("password", "");

  const onSubmit = (data) => {
    customFetch("POST", "user", {body: data})
        .then(userSession => {
          setUserSession(userSession);
          const token = getUserToken()
          const decoded = jwt_decode(token);
            customFetch("GET", `profile/${decoded.id}`)
            .then((json) => {
            setUser(json);
            navigate('/');
          })
          
          })
        .catch(error => {
          console.error(error);
          if (error.status === 409) {
            setNotRegistered(true);
            //alert('email already exists');
          return;
          }
    });
  };
  
  return (
    <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
      <div className='inputDiv'>
        <label className='infoLabel'>Enter your name</label>
        <input className="credentialsInput" placeholder="John" {...register("firstname", { 
            required: "Please enter your first name." , 
            minLength:{
              value:3,
              message:"Name must have at least 3 characters"
            }
          }
        )} />
      </div>
      <div className='inputDiv'>
        <label className='infoLabel'>Enter your last names</label>
        <input className="credentialsInput" placeholder="Doe" {...register("lastname", { 
            required: "Please enter your last name." , 
            minLength:{
              value:3,
              message:"Name must have at least 3 characters"
            }
          }
        )} />
      </div>
      <div className='inputDiv'>
        <label className='infoLabel'>Enter your email</label>
        <input className="credentialsInput" placeholder="john.doe@email.com" {...register("email", { 
            required: "Please enter your email.",
            pattern: {
              value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Please enter a valid email"
            }
          }
        )} />
       </div>
       <div className='inputDiv'>
        <label className='infoLabel'>Choose your password</label> 
        <input className="credentialsInput" placeholder="Password" type="password" {...register("password",{
            required:"Please enter your password.",
            pattern: {
              value:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
              message: "Password must have at least 8 characters, one digit [0-9], At least one lowercase character, at least one uppercase character, at least one special character "
            }
          }
        )} />
        </div>
        <div className='inputDiv'>
          <label className='infoLabel'>Repeat your password</label>
          <input className="credentialsInput" placeholder='Repeat password' type="password" {...register("password2", {
            validate: value =>
              value === password.current || "The passwords do not match"
            }
          )} />
        </div>
        <input className="registerSubmit" type="submit" value="Sign up" />
         {notRegistered ?
                <div id="InfoBanner">
                  <span className="reversed reversedRight">
                    <span>&#9888;</span>
                  </span>
                  <span className='reversed reversedLeft'>Your email is already registered</span>
                <> <Link 
                      to="/login"
                      className="linkreg"
                  >
                    Login here.
                  </Link></>
              </div>  : <>
            </>
          }
      </form>
  );
};
export default Register;