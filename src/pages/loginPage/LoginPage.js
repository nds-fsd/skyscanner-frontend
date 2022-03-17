import React from 'react';
import LoginForm from '../../components/loginForm/LoginForm';
import './loginPage.css';

const login = () => {
  return (
    <div className="login-container">
        <div className="overlay" />
        <div className="login-form">
          <h2 className="login-title">Log in to your account</h2>
          <LoginForm />
          <p>You don't have an account? <a href="/signup"> Sign up</a></p>
        </div>
    </div>
  );
};

export default login;
