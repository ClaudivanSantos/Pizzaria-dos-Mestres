import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom'
import { api } from '../../services/api';
import style from './ResetPassword.module.scss'
import Logo from "../../img/logo.png";
import { AiOutlineMail } from "react-icons/ai";

function Resetpassword() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const history = useHistory();
  
  useEffect(() => {
    api
      .get("/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch(() => {
        console.log("Err");
      });
  }, []);

  function campoVazio() {
    toast.error("Preencha todos os campos");
  }

  const handleReset = (e, id) => {
    e.preventDefault();
    if (email === "") {
      campoVazio();
    } else {
      {
        users.map((user, key) => {
          if (user.email == email) {
            history.push('/newpassword');
          } else if (user.email !== email) {
            toast.error("Email não cadastrado");
          }
        });
      }
    }
  };

  return (
    <>
    <Toaster position="bottom-left" />
    <div className={style.login}>
      <div
        className={style.loginlogo}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h1 className={style.h1logo}>
          Pizzari
          <img src={Logo} /> dos Mestres
        </h1>
      </div>

      <div className={style.loginright}>
        <h1>Redefina sua senha</h1>

        <div className={style.loginloginInputEmail}>
          <AiOutlineMail />
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleReset}>
          Continuar
        </button>
      </div>
    </div>
    </>
  )
}

export default Resetpassword