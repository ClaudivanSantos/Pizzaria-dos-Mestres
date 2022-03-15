import React, { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function handleAddItemToCart(id) {
    const itemObject = {  };
  }

  // function handleRemoveItemfromCart(id) {
  //   const filterCart = cart.filter(
  //     (cartItem) => cart.IndexOf(cartItem) !== id
  //   );
  //   setCart(filterCart);
  // }

  function clearCart() {
    setCart([]);
  }

  return <CartContext.Provider value={{cart, handleAddItemToCart, clearCart}}>{children}</CartContext.Provider>;
};
