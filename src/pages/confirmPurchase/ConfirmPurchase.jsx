import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext/CartContext";
import Bars from "../../layout/bars/Bars";
import style from "./ConfirmPurchase.module.scss";

function ConfirmPurchase() {
  const { cart, totalPrice } = useContext(CartContext);

  return (
    <>
      <Bars />
      <div>
        <h2>Seu pedido</h2>
      </div>

      {cart.map((cartItem, index) => {
        return (
          <>
            <div>
              <p>{cartItem.name}</p>
              <p>{cartItem.price}</p>
            </div>
          </>
        );
      })}
      <div>
              <p>Subtotal: {totalPrice}</p>
              <p>Entrega: 3</p>
            </div>
            <div>
              <p>Total: {totalPrice + 3} </p>
            </div>
    </>
  );
}

export default ConfirmPurchase;
