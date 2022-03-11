import React from 'react'
import Modal from 'react-modal'
import style from './CartModal.module.scss'
import {GrClose} from 'react-icons/gr';

function CartModal(isModalOpen, setIsModalOpen, handleCloseModal) {

  return (
    <Modal
      isOpen={false}
      onRequestClose={handleCloseModal}
      overlayClassName={style.modalOverlay}
      className={style.modalContent}
      >
        <h3>Carrinho de compras</h3>
        <GrClose className={style.closeModal} onClick={handleCloseModal}/>
        <p>lorem ipsum dolor sit amet, consectetur</p>
      </Modal>
  )
}

export default CartModal