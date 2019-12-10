import React from "react";
import { Link } from "@reach/router";
import { Button, Form } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <header className="head">
        <h1>BotiquinCloud</h1>
        <Form.Control sm="1" type="text" readOnly value={this.props.storeId} />
        <Form.Control sm="1" type="text" readOnly value={this.props.owner} />
        <Link to="/" className="menu-item">
          <Button variant="danger">Inicio</Button>
        </Link>
        <Button variant="danger" onClick={this.props.logout}>
          Log Out
        </Button>
      </header>
    );
  }
}

export default Header;
