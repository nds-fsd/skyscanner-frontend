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
  const {register, handleSubmit, formState: { errors }, watch} = useForm({mode: 'onBlur'});
  password.current = watch("password", "");

  const onSubmit = async (data) => {

    /*const FormValid = () => {
        
       if ( data.password !== data.password2 ) {
          console.log('El Password ha de ser igual');
          return false
      }
    }*/

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
  console.log(errors);

  /*<input ... />
{errors.name && errors.name.type === "required" && (
  <div className="error">You must enter your name</div>
)}
{errors.name && errors.name.type === "minLength" && (
  <div className="error">Your name must be at least 2 characters</div>
)}*/

  return (
  
  
  <div className='formregister'>

    <p>SingUp</p>
    <form className='formreg' onSubmit={handleSubmit(onSubmit)}>
     
        <input placeholder="nombre" {...register("firstname", { required: true , minLength:3} )} />
        {errors.firstname && <span>This field is required</span>}
        {errors.firstname && errors.firstname.type === "minLength" && (<span>Your name must be at least 3 characters</span>)}
      
        <input placeholder="apellidos" {...register("lastname", { required: true , minLength:3})} />
        {errors.lastname && <span>This field is required</span>}
        {errors.lastname && errors.lastname.type === "minLength" && (<span>Your name must be at least 3 characters</span>)}
        <input placeholder="email" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
      
        <input placeholder="password" type="password" {...register("password",{required:true, minLength: 8 })} />
        {errors.password && <span>This field is required</span>}
        {errors.password && errors.password.type === "minLenght" && (<span>Your password must be at least 8 characters</span>) }

      <input placeholder='Repeat password' type="password" {...register("password2", {
          validate: value =>
            value === password.current
        })}
      />
      {errors.password2 && errors.password.type === "validate" && <p> The passwords do not match</p>}

      <input type="submit" value="Registro" />
      </form>

  </div>
  );
};
export default Register;