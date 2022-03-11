import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bars from "../../layout/bars/Bars";
import style from "./Home.module.scss";
import Pizza from "../../img/pizza.png";
import axios from "axios";

function Home() {
  const [pizzas, setPizzas] = useState([]);

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
                  <img className={style.pizza} src={Pizza} />
                </div>

                <div className={style.infoPizza}>
                  <p className={style.descricao}>{pizza.name}</p>
                  <p className={style.price}>{pizza.Price}</p>
                </div>

                <div className={style.btn}>
                  <div className={style.addCart}>
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
