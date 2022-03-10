import React, { createContext, useState, useContext } from "react";

const LoginContext = createContext({}); //guarda valor inicial

export const LoginProvider = ({ children }) => {
  const [stateLogado, stateSetLogado] = useState(
    localStorage.getItem("logado")
  );

  function controlaStatusLogado(logado) {
    logado
      ? localStorage.setItem("logado", logado)
      : localStorage.removeItem("logado");
    stateSetLogado(logado);
  }

  return (
    <LoginContext.Provider
      value={{
        logado: stateLogado,
        setLogado: controlaStatusLogado,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export function useLogin() {
  let context = useContext(LoginContext);
  return context;
}
