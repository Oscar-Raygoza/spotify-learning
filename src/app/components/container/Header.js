import React from "react";

import "../styles/header.scss";

/**
 * *Assets
 */
import logo from "../../assets/logo.png";
import iconUser from "../../assets/iconUser.png";

function Header() {
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="Platzi Video" />
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={iconUser} alt="User" />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href="/">Cuenta</a>
          </li>
          <li>
            <a href="/">Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
