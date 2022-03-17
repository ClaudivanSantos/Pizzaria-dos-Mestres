import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState([]);
  const [tiket, setTiket] = useState([]);
  const [qtdItem, setQtdItem] = useState(1);

  console.log(cart);

  const totalPriceTiket = tiket.reduce((acc, current) => acc + current.price * qtdItem, 0);

  function handleAddItemToTiket(id, name, img, price) {
    const itemObject = {id, name, img, price};
    setTiket([ itemObject])
  }

  function handleRemoveItemToTiket(clickedItemTiket) {
    setTiket([]);
    
  }

  function handleAddItemToCart(id, price, name) {
    const itemObject = {id, price, name};
    setCart([...cart, itemObject])
  }
   
  function handleRemoveItemfromCart(clickedItemCart) {
    const filteredCart= cart.filter(
      (cartItem) => cart.indexOf(cartItem) !== clickedItemCart
    )
      setCart(filteredCart);
  }

  return <CartContext.Provider value={{cart, handleAddItemToTiket, handleRemoveItemToTiket, qtdItem, setQtdItem, tiket, qtdItem, setQtdItem, totalPriceTiket, setCart, handleAddItemToCart}}>{children}</CartContext.Provider>;
};
