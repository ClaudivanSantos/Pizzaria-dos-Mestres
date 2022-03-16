import React, { useContext, useState } from "react";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import CartModal from "../../components/CartModal/CartModal";

import style from "./ToolBar.module.scss";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext/CartContext";

export default function ToolBar({ openSidebar }) {
  const { handleRemoveItemfromCart, cart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }
  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
        <CartModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleCloseModal={handleCloseModal}
        />
        
      <div className={style.toolbar}>
        <div className={style.menu} onClick={openSidebar}>
          <FiMenu className={style.menuicon} />
        </div>
        <div className={style.loginlogo}>
          <Link to="/">
            <h1 className={style.h1logo}>
              Pizzari
              <img src={logo} />dos Mestres
            </h1>
          </Link>
        </div>
        <div className={style.divlogout}>
          <FiShoppingCart className={style.cart} onClick={handleOpenModal} />
          <div className={style.teste}>
            {cart.length}
          </div>
        </div>
      </div>
    </>
  );
}
