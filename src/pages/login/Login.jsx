import React, { useState, useContext, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";

import { useLogin } from "../../hooks/UseLogin";
import style from "./Login.module.scss";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import Register from "../register/Register";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const history = useHistory();
  const notify = () => toast("Here is your toast.");
  const { logado, setLogado } = useLogin();

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

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      campoVazio();
    } else {
      {
        users.map((user, key) => {
          if (user.email == email && user.senha == password) {
            history.push("/");
          } else if (user.email !== email || user.senha !== password) {
            toast.error("Email ou senha incorreto");
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
          <h1>Faça seu login</h1>

          <div className={style.loginloginInputEmail}>
            <AiOutlineMail />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={style.loginloginInputPassword}>
            <MdLock />
            <input
              type={show ? "text" : "password"}
              placeholder="Digite sua senha"
              value={password}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleLogin(e);
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="login-eye">
              {show ? (
                <HiEye size={20} onClick={handleClick} />
              ) : (
                <HiEyeOff size={20} onClick={handleClick} />
              )}
            </div>
          </div>
          <div>
            <Link to="/resetpassword">
              <p>Esqueceu sua senha?</p>
            </Link>
          </div>
          <button type="submit" onClick={(e) => handleLogin(e)}>
            Entrar
          </button>
          <div className={style.register}>
            <Link to="/register">
              <p> Não possui conta? faça seu cadastro aqui</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
