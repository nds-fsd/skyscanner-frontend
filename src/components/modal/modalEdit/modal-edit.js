import React, {useContext, useState} from 'react';
import { useForm } from "react-hook-form";
import customFetch from "../../../api";
import { UserContext } from '../../../context/userContext';
import "./modal-edit.css";
import ErrorAlert from '../../errorAlert/errorAlert';
import Swal from 'sweetalert2';

const ModalEdit = ({setShowModalEdit }) => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const {user} = useContext(UserContext);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const onSubmit = (data) => {

        customFetch("PUT", `profile/${user._id}`, {body: data})
                .then(()=> Swal.fire(
                    'Perfect!',
                    'Your name is changed',
                    'success'
                  ))
                .then(()=> setShowModalEdit(false))
                .catch(error => {
                    console.error(error);
                    if (error.status === 404 || error.status === 500) {
                        setShowErrorAlert(true)
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
            {showErrorAlert === true &&
              <ErrorAlert text="unable to update profile. Please try again" />  
            }
            <input type='submit' className='button-save-remove' value="Save"/>
            
           </form>
                
                
                
            </div>
      
        </div>
    </div>
    )
};

export default ModalEdit;