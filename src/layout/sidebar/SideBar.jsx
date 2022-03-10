import React from "react";
import { FiX,FiLogOut } from "react-icons/fi";

import "./SideBar.css";

import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";

function Sidebar({sidebar, closeSidebar}) {

  const history = useHistory();

  function logout() {
    localStorage.removeItem('logado')
    history.push("/login");
  }

  return (
    <>
      <div className={sidebar? 'sidebar sidebar--open' :'sidebar'}>
        <div className='divexit'>
            <FiX className='exit' onClick={closeSidebar}/>
        </div>
        <Link to="/listarecursos">
          <li>Recursos</li>
        </Link>
        <Link to="/listarecursos">
          <li>Recursos</li>
        </Link>
        <Link to="/listarecursos">
          <li>Recursos</li>
        </Link>
        <Link to="/login">
        <FiLogOut className="logout" onClick={logout}/>
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
