import React, {useContext} from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from './loginForm.module.css';
import { setUserSession, getUserToken } from '../../api/auth';
import customFetch from '../../api';
import { UserContext } from "../../context/userContext";
import jwt_decode from "jwt-decode";
const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);
    /*useEffect(() => {
        const token = getUserToken()
        if (token) navigate("/");
    }, []);*/


    const onSubmit = (data) => {
        console.log(data);
        customFetch("POST", "login", {body: data})
        .then(userSession => {
            setUserSession(userSession);
            const token = getUserToken()
            const decoded = jwt_decode(token);
            customFetch("GET", `profile/${decoded.id}`)
            .then((json) => {
            setUser(json);
            navigate('/');
          })
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
                <input className={styles.credentialsInput} {...register("email", { required: true })} placeholder="Email" type="text"/>
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
