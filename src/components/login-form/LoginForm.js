import React from 'react';
import { useForm } from "react-hook-form";
import styles from './loginForm.module.css'

const LoginForm = () => {
    const { register, handleSubmit} = useForm();
    
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.inputDiv}>
                <label>Introduce tu nombre de usuario</label>
                <input {...register("username")} placeholder="Usuario" type="text"/>
            </div>
            <div className={styles.inputDiv}>
                <label>Introduce tu contraseña</label>
                <input {...register("password")} placeholder="Contraseña" type="password" />
            </div>
            <input type="submit" />
        </form>
    );
};

export default LoginForm;
