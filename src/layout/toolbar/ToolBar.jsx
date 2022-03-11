import React, { useState } from "react";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import CartModal from "../../components/CartModal/CartModal";

import style from "./ToolBar.module.scss";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

export default function ToolBar({ openSidebar }) {
  const history = useHistory();
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
        </div>
      </div>
    </>
  );
}
