import React from "react";
import { Link } from "@reach/router";

class Header extends React.Component {
  render() {
    return (
      <header className="head">
        <Link to="/clientes" className="menu-item">
          Clientes
        </Link>
        <Link to="/" className="menu-item">
          Home
        </Link>
      </header>
    );
  }
}

export default Header;
