import React, {useContext, useState} from 'react';
import "./modal-password.css";
import { useForm } from "react-hook-form";
import customFetch from "../../../api";
import { UserContext } from '../../../context/userContext';
import ErrorAlert from '../../errorAlert/errorAlert';

const ModalPassword = ({setShowModalPassword }) => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const {user} = useContext(UserContext);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const onSubmit = (data) => {
        customFetch("POST", `profile/${user._id}`, {body: data})
                .then(()=> setShowModalPassword(false))
                .catch(error => {
                    console.error(error);
                    if (error.status === 404 || error.status === 500) {
                        setShowErrorAlert(true)
                        console.log(setShowErrorAlert, "setshowalert")
                    }
                 });
     }
    
    return(

    <div className="modal-edit-container">
        <div className="modal-edit"> 
            <span className="close" onClick={() => setShowModalPassword(false)}>x</span>
            <div className="bottom-modal-remove">
                <p className='Edit-info'>Change your password</p>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <label>Password</label>
                        <input placeholder="password" type="password" className='input-edit'{...register("password",{
                            required:"Please enter your password.",
                            pattern: {
                            value:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                            message: "Password must have at least 8 characters, one digit [0-9], At least one lowercase character, at least one uppercase character, at least one special character "}
                            })} />
                            {showErrorAlert === true &&
                            <ErrorAlert text="This field is required" />  
                            }       
                    <label>Enter your new password</label>
                        <input placeholder="New password" type="password" className='input-edit'{...register("new password",{
                            required:"Please enter your password.",
                            pattern: {
                            value:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                            message: "Password must have at least 8 characters, one digit [0-9], At least one lowercase character, at least one uppercase character, at least one special character "}
                            })} />
                             {showErrorAlert === true &&
                            <ErrorAlert text="This field is required" />  
                            }       
                        <input type='submit' className='button-save-remove' value="Save"/>
                </form>
            </div>
        </div>
    </div>
  )
};

export default ModalPassword;