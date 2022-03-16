import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  const totalPrice = cart.reduce((acc, current) => acc + current.price, 0);

  function handleAddItemToCart(id, price, name) {
    const itemObject = {id, price, name};
    setCart([...cart, itemObject])
  }
 
  function handleRemoveItemfromCart(clickedItemIndex) {
    const filteredCart= cart.filter(
      (cartItem) => cart.indexOf(cartItem) !== clickedItemIndex
    )
      setCart(filteredCart);
      console.log(cart)
  }

  return <CartContext.Provider value={{cart, handleAddItemToCart, handleRemoveItemfromCart, totalPrice}}>{children}</CartContext.Provider>;
};
