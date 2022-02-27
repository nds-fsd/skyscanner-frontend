import React from 'react';
import Footer from '../../components/footer/Footer';
import './successPage.css';
import { useNavigate } from 'react-router-dom';

export const SuccessPage = () => {
    const navigate = useNavigate();

    return (
        <div className="success-container">
            <div className="booking-success">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#16A086" className="success-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h3 className="success-title">Tu vuelo se ha reservado correctamente</h3>
                <h5 className="success-subtitle">Recibiras la información necesaria para pagar por correo</h5>
                <button onClick={() => navigate('/')} className="return-home-btn">Volver al inicio</button>
            </div>
            <Footer />
        </div>
        
    )
}
