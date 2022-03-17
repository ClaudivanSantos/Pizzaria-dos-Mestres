import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";

import { CartContext } from "../../Contexts/CartContext/CartContext";
import style from "./TiketModal.module.scss";

function TiketModal({ isModalOpen, handleCloseModal }) {
  const { tiket, qtdItem, setQtdItem, handleAddItemToCart, handleRemoveItemToTiket, totalPriceTiket, cart, setCart } = useContext(CartContext);

  function addQtdItem() {
    setQtdItem(qtdItem + 1);
  }
  function removeQtdPizza() {
    if (qtdItem == 1) {
        handleRemoveItemToTiket();
        handleCloseModal();
    } else {
      setQtdItem(qtdItem - 1);
    }
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      overlayClassName={style.modalOverlay}
      className={style.modalContent}
    >
      <GrClose className={style.closeModal} onClick={handleCloseModal} />

      <Toaster position="bottom-left" />

      {tiket.map((tiketItem, index) => {
        return (
          <div>
            <div key={index} className={style.header}>
              <h2>{tiketItem.name}</h2>
              <img className={style.imgTiket} src={tiketItem.img} />
            </div>
              <p>Selecione a quantidade de itens:</p>
              <div className={style.qtdItens}>
              <div>
                <button onClick={() => removeQtdPizza()}>-</button>
              </div>
              <div className={style.divQtdItens}>
                <p>{qtdItem}</p>
              </div>
              <div>
                <button onClick={() => addQtdItem()}>+</button>
              </div>
              </div>
          </div>
        );
      })}

      <div>
        <h3>Total</h3>
        <h4>{totalPriceTiket}</h4>
        <button className={style.btn} type="submit" onClick={() => {handleAddItemToCart(tiket); handleCloseModal(); }}>
          Confirmar
        </button>
      </div>
    </Modal>
  );
}

export default TiketModal;
