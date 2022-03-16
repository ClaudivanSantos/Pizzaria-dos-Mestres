import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);

  function handleAddItemToCart(id, price, name) {
    const itemObject = {id, price, name};
    setCart([...cart, itemObject])
  }
 
  function handleRemoveItemfromCart(id, cartItem) {
console.log(id);

setCart(cart.filter(cartItem=>cartItem.id !== id));
  }

  function va() {
    
  }

  return <CartContext.Provider value={{cart, handleAddItemToCart, handleRemoveItemfromCart}}>{children}</CartContext.Provider>;
};
