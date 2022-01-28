import React, {useEffect} from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/");
  }, []);
  const {register, handleSubmit,formState: { errors },} = useForm();

  const onSubmit = async (data) => {

    const response = await fetch("http://localhost:5001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(data);
    if (!response.ok) {
      alert("Response wasn't ok");
      return;
    }
    const json = await response.json();

    localStorage.setItem("token", json.token);

    navigate("/");
    
    

    //e.target.reset();
  }

  return (
  
  
  <div className='formregister'>

    <p>SingUp</p>
    <form className='formreg' onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="nombre" {...register("name", { required: true } )} />
        {errors.name && <span>This field is required</span>}
        
        <input placeholder="apellidos" {...register("surname", { required: true })} />
        {errors.surname && <span>This field is required</span>}
        <input placeholder="email" type=""{...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
        <input placeholder="password" type="password"{...register("password", { required: true })}/>
        {errors.password && <span>This field is required</span>}
        {/*<input placeholder="confirma password" type="password" {...register,("password2", { required: true })}/>*/}
        {errors.password2 && <span>This field is required</span>}
        <input type="submit" value="Registro" />
      </form>

  </div>
  );
};
export default Register;