import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { api } from "../../services/api";
import style from "./NewPassword.module.scss";
import Logo from "../../img/logo.png";

function NewPassword() {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  function campoVazio() {
    toast.error("Preencha todos os campos");
  }

  const handleReset = (e, id) => {
    e.preventDefault();
    if (password === "") {
      campoVazio();
    } else if (password !== password2) {
      toast.error("As senhas são diferentes");
    } else {
      api
        .put('/users', {
          senha: password,
        })
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

          <div className={style.loginloginInputPassword}>
            <MdLock />
            <input
              type={show ? "text" : "password"}
              placeholder="Digite sua nova senha"
              value={password}
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
          <div className={style.loginloginInputPassword}>
            <MdLock />
            <input
              type={show ? "text" : "password"}
              placeholder="Repita sua nova senha"
              value={password2}
              onKeyPress={(e) => {
                if (e.key === "Enter");
              }}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <div className="login-eye">
              {show ? (
                <HiEye size={20} onClick={handleClick} />
              ) : (
                <HiEyeOff size={20} onClick={handleClick} />
              )}
            </div>
          </div>

          <button type="submit" onClick={handleReset}>
            Continuar
          </button>
        </div>
      </div>
    </>
  );
}

export default NewPassword;
