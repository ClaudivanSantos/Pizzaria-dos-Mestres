import React, { useContext } from "react";
import Modal from "react-modal";
import style from "./CartModal.module.scss";
import { GrClose } from "react-icons/gr";
import { CartContext } from "../../Contexts/CartContext/CartContext";

function CartModal({ isModalOpen, handleCloseModal }) {
  const { handleRemoveItemfromCart, cart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, current) => acc + current.price, 0);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      overlayClassName={style.modalOverlay}
      className={style.modalContent}
    >
      <h3>Carrinho de compras</h3>
      <GrClose className={style.closeModal} onClick={handleCloseModal} />

      {cart.map((cartItem, index) => {
        return (
          <div>
            <div key={index} itemIndex={index} className={style.divRemoveItem}>
              <p>
                {cartItem.name} - R$ {cartItem.price.toFixed(2)}
              </p>
              <GrClose
                className={style.removeItem}
                onClick={() => handleRemoveItemfromCart(index)}
              />
            </div>
          </div>
        );
      })}
      <div>
        <h3>Total</h3>
        <h4>R$ {totalPrice.toFixed(2)}</h4>
        <button className={style.btn} type="submit">Confirmar compra</button>
      </div>
    </Modal>
  );
}

export default CartModal;
