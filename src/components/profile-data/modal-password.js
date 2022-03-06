import React, {useContext} from 'react';
import "./modal-edit.css";
import { useForm } from "react-hook-form";
import customFetch from "../../api";
import { UserContext } from '../../context/userContext';

<<<<<<< HEAD
=======

>>>>>>> 7f3e70c757db9367a898690c2988bf7ded1fcd09
const ModalPassword = ({setShowModalPassword }) => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const {user} = useContext(UserContext);
    const onSubmit = (data) => {

<<<<<<< HEAD
        customFetch("PUT", `profile/${user.id}`, {body: data})
                .then(()=> alert("Edit profile!"))
=======
        customFetch("PUT", `profile/${user.password}`, {body: data})
                .then(()=> alert("Edit password!"))
>>>>>>> 7f3e70c757db9367a898690c2988bf7ded1fcd09
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
<<<<<<< HEAD
            <input type="text" placeholder="Password"  className='input-edit' {...register("Password", { required: true })} />
            {errors.firstname && <span >This field is required</span>}
            
            <input type="text" placeholder="New password" className='input-edit' {...register("lastname", { required: true })} />
            {errors.lastname && <span >This field is required</span>}
            <input type='submit' className='button-save-remove' value="Save"/>
            
           </form>
                 
                
           </div>
      
      </div>
  </div>
=======
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
>>>>>>> 7f3e70c757db9367a898690c2988bf7ded1fcd09
  )
};

export default ModalPassword;