import React from 'react'
import Modal from 'react-modal';

function CartModal(modalIsOpen, setIsOpen) {
  const closeModal = () => setIsOpen(false)

  return (
    <>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
      </Modal>
    </>
  )
}

export default CartModal