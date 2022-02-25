import React, {useEffect, useContext} from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from './loginForm.module.css';
import { UserContext } from "../../context/userContext";
import customFetch from "../../api";
import { setUserSession, getUserToken } from "../../api/auth";

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);
    
    useEffect(() => {
        const token = getUserToken()
        if (token) navigate("/");
      }, []);

    const onSubmit = (data) => {
        customFetch("POST", "login", {body: data})
        
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
          if (error.status === 400) {
            alert("invalid email or password");
          }

        });
      };

    return (
        
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.inputDiv}>
                <label className={styles.infoLabel}>Introduce tu nombre de usuario</label>
                <input className={styles.credentialsInput} {...register("email", { required: true })} placeholder="Your email" type="text"/>
                {errors.email && <span className={styles.errorLabel}>This field is required</span>}
            </div>
            <div className={styles.inputDiv}>
                <label className={styles.infoLabel}>Introduce tu contraseña</label>
                <input className={styles.credentialsInput} {...register("password", { required: true })} placeholder="Contraseña" type="password" />
                {errors.password && <span className={styles.errorLabel}>This field is required</span>}
            </div>
            <input type="submit" className={styles.loginSubmit}/>
            
       
        
         </form>
        
    );
};

export default LoginForm;
