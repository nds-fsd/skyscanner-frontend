import React, {useEffect, useRef} from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  const password = useRef({});
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/");
  }, );
  const {register, handleSubmit, formState: { errors }, watch} = useForm({mode: 'onBlur', shouldUseNativeValidation: true});
  password.current = watch("password", "");

  const onSubmit = async (data) => {

      const response = await fetch("http://localhost:5001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    //console.log(data);
    if (!response.ok) {
      alert("Response wasn't ok");
      return;
    }
    const json = await response.json();

    localStorage.setItem("token", json.token);

    navigate("/");
   
    //e.target.reset();
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
          required: "Please enter your email."})} />
        
        <input placeholder="password" type="password" {...register("password",{
          required:"Please enter your password.",
          minLength:{
            value:8,
            message:"Password must have at least 8 characters, one digit [0-9], At least one lowercase character, at least one uppercase character, at least one special character "
          }})} />
      
      <input placeholder='Repeat password' type="password" {...register("password2", {
          validate: value =>
            value === password.current || "The passwords do not match"
        })}
      />
          {errors.password2 &&  <p>{errors.password2.message}</p>}

      <input type="submit" value="Regístrate" />
      </form>

  </div>
  );
};
export default Register;