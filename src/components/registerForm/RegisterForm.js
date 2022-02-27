import React, {useEffect, useRef, useState} from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import "./registerForm.css";

const Register = () => {
  const navigate = useNavigate();
  const password = useRef({});
  const [notRegistered, setNotRegistered] = useState(false);

  useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) navigate("/");
  }, );
  
  const {register, handleSubmit, watch} = useForm({mode: 'onTouched', shouldUseNativeValidation: true});
  
  password.current = watch("password", "");
  //console.log(password.current)

  const onSubmit =  async (data) => {
    const response = await fetch("http://localhost:3020/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
      if (response.status === 409) {
        //alert("email already exists");
          setNotRegistered(true)
        return;
    }
    const json = await response.json();
    localStorage.setItem("token", json.token);
    navigate("/");
  }

  return (
    <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
      <div className='inputDiv'>
        <label className='infoLabel'>Introduce tu nombre</label>
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
        <label className='infoLabel'>Introduce tus apellidos</label>
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
        <label className='infoLabel'>Introduce tu correo electronico</label>
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
        <label className='infoLabel'>Elige tu contraseña</label> 
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
          <label className='infoLabel'>Vuelve a escribir tu contraseña</label>
          <input className="credentialsInput" placeholder='Repeat password' type="password" {...register("password2", {
            validate: value =>
              value === password.current || "The passwords do not match"
            }
          )} />
        </div>
        <input className="registerSubmit" type="submit" value="Regístrate" />
         {notRegistered ?
                <div id="InfoBanner">
                  <span class="reversed reversedRight">
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
      </form>
  );
};
export default Register;