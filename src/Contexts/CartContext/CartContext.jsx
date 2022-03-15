import React, { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function handleAddItemToCart() {
    setCart([...cart]);
  }

  function handleRemoveItemfromCart(clickedItemIndex) {
    const filteredCart = cart.filter(
      (cartItem) => cart.IndexOf(cartItem) !== clickedItemIndex
    );
    setCart(filteredCart);
  }

  function clearCart() {
    setCart([]);
  }

  return <CartContext.Provider value={{cart, handleAddItemToCart, handleRemoveItemfromCart, clearCart}}>{children}</CartContext.Provider>;
};
