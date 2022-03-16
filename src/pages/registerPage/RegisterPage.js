import React from 'react';
import "./registerPage.css"
import RegisterForm from '../../components/registerForm/RegisterForm';

const RegisterPage = () => {

    return (
        <div className="register-container">
            <div className="register-form">
                <h2 className="register-title">Create a new account</h2>
                <RegisterForm />
            </div>
        </div>
    );

};
export default RegisterPage;