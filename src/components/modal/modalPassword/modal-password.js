import React, {useContext} from 'react';
import "./modal-password.css";
import { useForm } from "react-hook-form";
import customFetch from "../../../api";
import { UserContext } from '../../../context/userContext';

const ModalPassword = ({setShowModalPassword }) => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const {user} = useContext(UserContext);
    const onSubmit = (data) => {

        customFetch("PUT", `profile/${user.password}`, {body: data})
                .then(()=> alert("Edit password!"))
                .then(()=> setShowModalPassword(false))
                .catch(error => {
                    console.error(error);
                    if (error.status === 404 || error.status === 500) {
                      alert("unable to update profile");
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
                            {errors.password && <span >This field is required</span>}
                    <label>Enter your new password</label>
                        <input placeholder="New password" type="password" className='input-edit'{...register("new password",{
                            required:"Please enter your password.",
                            pattern: {
                            value:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                            message: "Password must have at least 8 characters, one digit [0-9], At least one lowercase character, at least one uppercase character, at least one special character "}
                            })} />
                            {errors.password && <span >This field is required</span>}
                        <input type='submit' className='button-save-remove' value="Save"/>
                </form>
            </div>
        </div>
    </div>
  )
};

export default ModalPassword;