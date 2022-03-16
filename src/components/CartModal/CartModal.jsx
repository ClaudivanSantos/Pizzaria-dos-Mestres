import React, { useContext } from "react";
import Modal from "react-modal";
import style from "./CartModal.module.scss";
import { GrClose } from "react-icons/gr";
import { CartContext } from "../../Contexts/CartContext/CartContext";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";

function CartModal({ isModalOpen, handleCloseModal }) {
  const { handleRemoveItemfromCart, cart, totalPrice } = useContext(CartContext);
  const history = useHistory();  

  function handleValidateCart(e) {
    if (totalPrice == 0) {
      toast.error("Adicione ao menos um item no carrinho");
      e.preventDefault()
    }else{
      history.push("/confirmpurchase");
    }
  }
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      overlayClassName={style.modalOverlay}
      className={style.modalContent}
    >
      <h3>Carrinho de compras</h3>
      <GrClose className={style.closeModal} onClick={handleCloseModal} />

      <Toaster position="bottom-left" />

      {cart.map((cartItem, index) => {
        return (
          <div>
            <div key={index} className={style.divRemoveItem}>
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
          <button
            className={style.btn}
            type="submit"
            onClick={() => handleValidateCart()}
          >
            Confirmar compra
          </button>
      </div>
    </Modal>
  );
}

export default CartModal;
