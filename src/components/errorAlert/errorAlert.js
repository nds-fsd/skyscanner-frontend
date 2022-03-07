import React from 'react';
import './errorAlert.css'

const ErrorAlert = ({text}) => {

    return(
        <div className='alert-container'>
            <p>{text}</p>
        </div>
    )
}
export default ErrorAlert