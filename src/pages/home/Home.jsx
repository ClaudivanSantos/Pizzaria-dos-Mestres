import React, { useContext, useEffect, useState } from "react";
import Bars from "../../layout/bars/Bars";
import style from "./Home.module.scss";
import axios from "axios";
import { CartContext } from "../../Contexts/CartContext/CartContext";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  const { handleAddItemToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("http://localhost:3333/pizzas")
      .then((response) => {
        setPizzas(response.data);
      })
      .catch(() => {
        console.log("Err");
      });
  }, []);

  return (
    <>
      <Bars />
      <div className={style.divTittle}>
        <h1 className={style.title}>Pizzas</h1>
      </div>

      <main>
        <div className={style.cards}>
          {pizzas.map((pizza, key) => {
            return (
              <div key={key} className={style.card}>
                <div className={style.divPizza}>
                  <img className={style.pizza} src={pizza.img} />
                </div>

                <div className={style.infoPizza}>
                  <p className={style.descricao}>{pizza.name}</p>
                  <p className={style.price}>{pizza.Price}</p>
                </div>

                <div className={style.btn}>
                  <div className={style.addCart} 
                  onClick={() => handleAddItemToCart()}>

                    <button>Adicionar no carrinho</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Home;
