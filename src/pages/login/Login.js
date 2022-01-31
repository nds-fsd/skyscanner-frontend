import React from 'react';
import LoginForm from '../../components/login-form/LoginForm';
import styles from './login.module.css';

const login = () => {
  return (
    <div className={styles.loginform}>
        <h2 className={styles.title}>Accede a tu cuenta</h2>
        <LoginForm />
    </div>
  );
};

export default login;
