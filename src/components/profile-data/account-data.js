import React from 'react';
import './acount-data.css';

const AccountData = () => {
  return (
   <section className='account-data-container'>
       <div>
           <p>Cuenta</p>
       </div>
       <div className='information'>
           <div className='header-title-profile'>
               <p>Información General</p>
           </div>
           <p className='email-information'>Dirección de correo electrónico</p>
           <p>gallegos.carolina@outlook.com</p>

       </div>
       <div className='suscription'>
       <div className='header-title-profile'>
               <p>Suscripciones</p>
           </div>

       </div>
       <div className='account'>
       <div className='header-title-profile'>
               <p>Cuenta</p>
           </div>

       </div>
    </section>
  );
}
export default AccountData;