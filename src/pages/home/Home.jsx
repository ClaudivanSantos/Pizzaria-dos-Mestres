import React, { useContext, useEffect, useState } from "react";
import Bars from "../../layout/bars/Bars";
import style from "./Home.module.scss";
import axios from "axios";
import { CartContext } from "../../Contexts/CartContext/CartContext";
import TiketModal from "../../components/TiketModal/TiketModal";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [pizzas, setPizzas] = useState([]);

  const { handleAddItemToTiket } = useContext(CartContext);

  function handleOpenModal() {
    setIsModalOpen(true);
  }
  function handleCloseTiketModal() {
    setIsModalOpen(false);
  }

  function handleAddItemToTiketAndOpenModal(){
    
    
  }

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
      <TiketModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleCloseModal={handleCloseTiketModal}
      />
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
                  <p className={style.name}>{pizza.name}</p>
                </div>

                <div className={style.btn}>
                  <div className={style.addCart} onClick={() => {handleAddItemToTiket(pizza.id, pizza.name, pizza.img, pizza.price); handleOpenModal(); }}>
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