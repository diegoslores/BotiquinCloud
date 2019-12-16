import React from "react";
import { Link } from "@reach/router";
import { Button, Form, Row, Col } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <Row className="head">
        <Col sm="6">
          <h1>BotiquinCloud</h1>
        </Col>
        <Col sm="4">
          <Form.Control type="text" readOnly value={this.props.storeId} />
          <Form.Control type="text" readOnly value={this.props.owner} />
        </Col>
        <Col sm="2">
          <Link to="/" className="menu-item">
            <Button variant="info">Inicio</Button>
          </Link>
          <Button variant="info" onClick={this.props.logout}>
            Salir
          </Button>
        </Col>
      </Row>
    );
  }
}

export default Header;
