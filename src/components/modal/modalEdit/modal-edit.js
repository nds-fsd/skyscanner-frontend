import React, {useContext} from 'react';
import { useForm } from "react-hook-form";
import customFetch from "../../../api";
import { UserContext } from '../../../context/userContext';
import "./modal-edit.css";
import Swal from 'sweetalert2';

const ModalEdit = ({setShowModalEdit }) => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const {user, forceReloadUser} = useContext(UserContext);
    const onSubmit = (data) => {

        customFetch("PUT", `profile/${user._id}`, {body: data})
                .then(()=> Swal.fire('First name and surname saved!', '', 'success'))
                .then(()=> setShowModalEdit(false))
                .then(() => forceReloadUser())
                .catch(error => {
                    console.error(error);
                    if (error.status === 404 || error.status === 500) {
                      Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'unable to update profile!'
                        });
                    }
                 });
     }
    
    return(

    <div className="modal-edit-container">
        <div className="modal-edit"> 
            <span className="close" onClick={() => setShowModalEdit(false)}>x</span>
            <div className="bottom-modal-remove">
                <p className='Edit-info'>Edit your profile</p>
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

export default ModalEdit;