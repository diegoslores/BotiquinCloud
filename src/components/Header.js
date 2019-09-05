import React from "react";
import { Link } from "@reach/router";

class Header extends React.Component {
  render() {
    return (
      <header className="head">
        <Link to="/:storeId" className="menu-item">
          Botica
        </Link>
        <Link to="/" className="menu-item">
          Home
        </Link>
      </header>
    );
  }
}

export default Header;
