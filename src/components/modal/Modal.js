import React from 'react';
import styles from './modal.module.css';
import {AiOutlineCloseCircle} from 'react-icons/ai';

const Modal = ({ open, handleCloseModal, children }) => open ? (
  <div>
    <div className={styles._overlay} />
    <div className={styles._container}>
      <div onClick={handleCloseModal} className={styles._closeIcon}><AiOutlineCloseCircle /></div>
      {children}
    </div>
  </div>
) : null;

export default Modal;