import React from "react";
import { CartProvider } from "./Contexts/CartContext/CartContext";

import "./Global.module.scss";
import Routes from "./Routes";

function App() {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  );
}

export default App;
