import React from 'react';
import LoginForm from '../../components/loginForm/LoginForm';
import './loginPage.css';

const login = () => {
  return (
    <div className="login-container">
        <div className="overlay" />
        <div className="login-form">
          <h2 className="login-title">Accede a tu cuenta</h2>
          <LoginForm />
        </div>
    </div>
  );
};

export default login;
