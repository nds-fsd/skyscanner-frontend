import React , {useContext} from 'react';
import { useForm } from "react-hook-form";
import customFetch from "../../api";
//import { getSessionUser, setUserSession} from "../../api/auth";
import { UserContext } from '../../context/userContext';
import './modal-aeroport.css';
import aeroportImage from "../../files/aeroportImage.png";
import Swal from 'sweetalert2';

const Modal = ({setShowModal }) => {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const {user} = useContext(UserContext);
  
  const onSubmit = (data) => {

    customFetch("PUT", `profile/favairport/${user.id}`, {body: data})
            .then(()=> Swal.fire({
              title: 'Do you want to save the changes?',
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: 'Save',
              denyButtonText: `Don't save`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                Swal.fire('Aeroport Saved!', '', 'success')
              } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
              }
            }))
            .then(()=> setShowModal(false))
            .catch(error => {
          
              console.error(error);
              if (error.status === 404 || error.status === 500) {
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'impossible to update airport!'
                })
               
              }
    
            });

  }

return(
  <div className="modal-container">
      <div className="modal"> 
      <span className="close" onClick={() => setShowModal(false)}>x</span>
        <img className="aeroportImage" src={ aeroportImage } alt="aeroportImage" />
        <div className="bottom-modal">
            <h2>Manage your airports of origin</h2>
            <p className='favorite-aeroport1'>Tell us where you want to fly from so we can show you the most interesting offers and ideas for you.</p>
            <div>
                <p className='aeroport-origin'>Airport of origin</p>
          <form onSubmit={handleSubmit(onSubmit)} >
            <input type="text" className='input-aeroport' {...register("prefairport", { required: true })} />
            {errors.prefairport && <span >This field is required</span>}
            <input type='submit' className='button-save-aeroport' value="Save"/>

           </form>
            </div>
        </div>
      
      </div>
  </div>
  )
};

export default Modal;