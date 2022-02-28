import React, {useEffect, useRef, useState, useContext} from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from '../../context/userContext';
import customFetch from "../../api";
import { setUserSession, getUserToken } from "../../api/auth";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  const password = useRef({});
  const [notRegistered, setNotRegistered] = useState(false);
  const {setUser} = useContext(UserContext);

  useEffect(() => {
    const token = getUserToken()
    if (token) navigate("/");
  }, []);
  const {register, handleSubmit, watch} = useForm({mode: 'onTouched', shouldUseNativeValidation: true});
  
  password.current = watch("password", "");
  //console.log(password.current)

  const onSubmit = (data) => {
    customFetch("POST", "user", {body: data})
    
    .then(userSession => {
      setUserSession(userSession);

      setUser({
        email: userSession.user.email,
        firstname: userSession.user.firstname,
        lastname: userSession.user.lastname,
        fav: userSession.user.fav,
        id : userSession.user._id
       
      });
      navigate("/");

    }).catch(error => {
      
      console.error(error);
      if (error.status === 409) {
        setNotRegistered(true);
          
        return;
      }

    });
  };

  return (
  
  <div className='formregister'>

    <p>SingUp</p>

    

  
    <form className='formreg' onSubmit={handleSubmit(onSubmit)}>
     
        <input placeholder="nombre" {...register("firstname", { 
          required: "Please enter your first name." , 
          minLength:{
          value:3,
          message:"Name must have at least 3 characters"}} )} />
        
        <input placeholder="apellidos" {...register("lastname", { 
          required: "Please enter your last name." , 
          minLength:{
          value:3,
          message:"Name must have at least 3 characters"
        }
        })} />
        
        <input placeholder="email" {...register("email", { 
          required: "Please enter your email.",
          pattern: {
          value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          message: "Please enter a valid email"}
          
          })} />
        
        <input placeholder="password" type="password" {...register("password",{
          required:"Please enter your password.",
          pattern: {
            value:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            message: "Password must have at least 8 characters, one digit [0-9], At least one lowercase character, at least one uppercase character, at least one special character "}

          })} />
      
      <input placeholder='Repeat password' type="password" {...register("password2", {
          validate: value =>
            value === password.current || "The passwords do not match"
        })}
      />
          

      <input type="submit" value="Regístrate" />

          
      </form>
      {notRegistered ?
    <div id="InfoBanner">
      <span className="reversed reversedRight">
        <span>&#9888;</span>
      </span>
      <span className='reversed reversedLeft'>Tu email ya está registrado</span>
      
      <> <Link 
                    to="/login"
                    className="linkreg"
                >
                    Haz login aquí.
          </Link></>
    </div>  : <>
   
    </>
  }
  </div>
  );
};
export default Register;