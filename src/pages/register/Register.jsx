import React, { useState, useContext, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { AiOutlineMail, AiOutlineUser, AiTwotoneHome } from "react-icons/ai";
import { MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import style from "./Register.module.scss";
import Logo from "../../img/logo.png";
import { api } from "../../services/api";

function Register() {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const validationPost = yup.object().shape({
    nome: yup.string().required("O nome é obrigatório"),
    bairro: yup
      .string()
      .required("O bairro é obrigatório")
      .max(150, "A descrição precisa ter menos de 80 caracteres"),
    rua: yup
      .string()
      .required("A rua é obrigatório")
      .max(500, "A rua precisa ter menos de 100 caracteres"),
    numero: yup.string().required("o numero é obrigatório"),
    email: yup
      .string()
      .required("O e-mail é obrigatório")
      .email("Digite um e-mail válido")
      .max(500, "O email precisa ter menos de 100 caracteres"),
    senha: yup.string().required("A senha é obrigatório"),
  });

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

  function validateEmail(){
    {users.map((user, key) =>{
      if(user.email == email){
        toast.error("E-mail já cadastrado.")
      }
    })}
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationPost),
  });

  let history = useHistory();

  const addPost = (data) =>
    api
      .post("/users", data)
      .then(() => {
        history.push("/login");
      })
      .catch(() => {
        console.log("Deu errado");
      });

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
          <h1>Faça seu Registro</h1>
          <form onSubmit={validateEmail() || handleSubmit(addPost)}>
            <div className={style.inputName}>
              <AiOutlineUser />
              <input
                type="name"
                placeholder="Digite seu nome"
                name="nome"
                {...register("nome")}
              />
              <p className={style.errormessage}>{errors.nome?.message}</p>
            </div>

            <div className={style.inputAddress}>
              <AiTwotoneHome />
              <input
                type="text"
                placeholder="Digite seu bairro da sua casa"
                name="bairro"
                {...register("bairro")}
              />
              <p className={style.errormessage}>{errors.bairro?.message}</p>
            </div>

            <div className={style.inputAddress}>
              <AiTwotoneHome />
              <input
                type="text"
                placeholder="Digite sua rua da sua casa"
                name="rua"
                {...register("rua")}
              />
              <p className={style.errormessage}>{errors.rua?.message}</p>
            </div>

            <div className={style.inputAddress}>
              <AiTwotoneHome />
              <input
                type="number"
                placeholder="Digite o numero da sua casa"
                name="numero"
                {...register("numero")}
              />
              <p className={style.errormessage}>{errors.numero?.message}</p>
            </div>

            <div className={style.inputEmail}>
              <AiOutlineMail />
              <input
                type="email"
                placeholder="Digite seu e-mail"
                name="email"
                {...register("email")}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className={style.errormessage}>{errors.email?.message}</p>
            </div>

            <div className={style.inputPassword}>
              <MdLock />
              <input
                type={show ? "text" : "password"}
                placeholder="Digite sua senha"
                name="senha"
                {...register("senha")}
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleSubmit(e);
                }}
              />
              <p className={style.errormessage}>{errors.senha?.message}</p>
              <div className="login-eye">
                {show ? (
                  <HiEye size={20} onClick={handleClick} />
                ) : (
                  <HiEyeOff size={20} onClick={handleClick} />
                )}
              </div>
            </div>

            <button type="submit">Registrar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
