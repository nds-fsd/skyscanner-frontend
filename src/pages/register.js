import React, {useEffect, useRef} from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
//import {ApiError} from "../api/index"
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  const password = useRef({});
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/");
  }, );
  const {register, handleSubmit, watch} = useForm({mode: 'onTouched', shouldUseNativeValidation: true});
  
  password.current = watch("password", "");
  //console.log(password.current)

  const onSubmit =  (data) => {

      fetch("http://localhost:3020/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    .then((response) => {
      if (response.status !== 201) {
        alert("Coudn't Sing Up");
      }
      
      return response.json();
    })
    .then((json) => {
      localStorage.setItem("token", json.token);
      alert("Registration successful")
      navigate("/");
    })
    .catch((errors) => {
      
      console.error(errors);
    });
    
  }
  //console.log(errors);

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

          <Link 
                    to="/login"
                    className="linkreg"
                >
                    ¿Ya estás registrado?
          </Link>
      </form>

  </div>
  );
};
export default Register;