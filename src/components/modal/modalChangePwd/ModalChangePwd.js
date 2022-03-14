import React, {useContext, useRef} from 'react';
import { useForm } from "react-hook-form";
import customFetch from "../../../api";
import { UserContext } from '../../../context/userContext';
import "./modalChangePwd.css";

const ModalChangePwd = ({setShowModalChangePwd}) => {
    const { register, handleSubmit} = useForm();
    const {user} = useContext(UserContext);
    const password = useRef({});
    const onSubmit = (data) => {
        customFetch("PUT", `profile/${user._id}`, {body: data})
            .then(()=> alert("Edit password!"))
            .then(()=> setShowModalChangePwd(false))
            .catch(error => {
                console.error(error);
                if (error.status === 404 || error.status === 500) {
                    alert("unable to update profile");
                }
            }
        );
     }
    
    return(
        <div className="modal-edit-container">
            <div className="modal-edit"> 
                <span className="close" onClick={() => setShowModalChangePwd(false)}>x</span>
                <div className="bottom-modal-remove">
                    <p className='Edit-info'>Choose your new password</p>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <input className="input-edit" placeholder="Password" type="password" {...register("password",{
                            required:"Please enter your password.",
                            pattern: {
                            value:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                            message: "Password must have at least 8 characters, one digit [0-9], At least one lowercase character, at least one uppercase character, at least one special character "
                            }
                        }
                        )} />
                        <p className='Edit-info'>Rewrite your new password</p>
                        <input className="input-edit" placeholder='Repeat password' type="password" {...register("password2", {
                            validate: value =>
                            value === password.current || "The passwords do not match"
                            }
                        )} />
                        <input type='submit' className='button-save-remove' value="Save"/>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalChangePwd