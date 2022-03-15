import React, { useContext } from "react";
import Modal from "react-modal";
import style from "./CartModal.module.scss";
import { GrClose } from "react-icons/gr";
import { CartContext } from "../../Contexts/CartContext/CartContext";

function CartModal({ isModalOpen, handleCloseModal }) {
  const { handleRemoveItemFromCart, cart } = useContext(CartContext);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      overlayClassName={style.modalOverlay}
      className={style.modalContent}
    >
      <h3>Carrinho de compras</h3>
      <GrClose className={style.closeModal} onClick={handleCloseModal} />

      <div className={style.divRemoveItem}>
        <p>teste - R$ 10,00</p> <GrClose className={style.removeItem} onClick={handleRemoveItemFromCart} />
      </div>

      <h3>Total</h3>
      <h4>R$ 10,00</h4>

      <button>Confirmar compra</button>
    </Modal>
  );
}

export default CartModal;
