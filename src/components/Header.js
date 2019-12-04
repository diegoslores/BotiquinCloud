import React from "react";
import { Link } from "@reach/router";
import { Button } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <header className="head">
        <h1>BotiquinCloud</h1>
        <Link to="/" className="menu-item">
          <Button variant="danger" onClick={this.props.goToHome}>
            Inicio
          </Button>
        </Link>
        <Button variant="danger" onClick={this.props.logout}>
          Log Out
        </Button>
      </header>
    );
  }
}

export default Header;
