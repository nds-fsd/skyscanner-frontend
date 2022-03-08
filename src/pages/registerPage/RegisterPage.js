import React from 'react';
import "./registerPage.css"
import RegisterForm from '../../components/registerForm/RegisterForm';

const RegisterPage = () => {

    return (
        <div className="register-container">
            <div className="register-form">
                <h2 className="register-title">Registra tu nueva cuenta</h2>
                <RegisterForm />
            </div>
        </div>
    );

};
export default RegisterPage;