import React, {useContext} from 'react';
import "./modal-edit.css";
import { useForm } from "react-hook-form";
import customFetch from "../../api";
import { UserContext } from '../../context/userContext';

const ModalPassword = ({setShowModalPassword }) => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const {user} = useContext(UserContext);
    const onSubmit = (data) => {

        customFetch("PUT", `profile/${user.id}`, {body: data})
                .then(()=> alert("Edit profile!"))
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
            <input type="text" placeholder={user.firstname}  className='input-edit' {...register("firstname", { required: true })} />
            {errors.firstname && <span >This field is required</span>}
            
            <input type="text" placeholder={user.lastname} className='input-edit' {...register("lastname", { required: true })} />
            {errors.lastname && <span >This field is required</span>}
            <input type='submit' className='button-save-remove' value="Save"/>
            
           </form>
                 
                
           </div>
      
      </div>
  </div>
  )
};

export default ModalPassword;