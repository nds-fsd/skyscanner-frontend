import React, {useEffect} from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from './loginForm.module.css';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("user-session")?.token;
        if (token) navigate("/");
    }, []);

    const onSubmit = (data) => {
        fetch("*URL_BACKEND*", {
            method: 'POST',
            mode: 'cors',
            headers: {
                "content-type": 'application/json',
                /*"authorization": `Bearer ${getUserToken()}`*/
            },
            body: JSON.stringify(data)
        })
        .then(userSession => {
            localStorage.setItem("user-session", userSession);
            navigate("/");
        }).catch(error => {
          console.error(error);
        });
      };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.inputDiv}>
                <label>Introduce tu nombre de usuario</label>
                <input {...register("username", { required: true })} placeholder="Usuario" type="text"/>
                {errors.email && <span>This field is required</span>}
            </div>
            <div className={styles.inputDiv}>
                <label>Introduce tu contraseña</label>
                <input {...register("password", { required: true })} placeholder="Contraseña" type="password" />
                {errors.password && <span>This field is required</span>}
            </div>
            <input type="submit" />
        </form>
    );
};

export default LoginForm;
