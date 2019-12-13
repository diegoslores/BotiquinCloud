import React from "react";
import { Link } from "@reach/router";
import { Button, Form, Row, Col } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <header className="head">
        <Row>
          <Col sm="6">
            <h1>BotiquinCloud</h1>
          </Col>
          <Col sm="4">
            <Form.Control type="text" readOnly value={this.props.storeId} />
            <Form.Control type="text" readOnly value={this.props.owner} />
          </Col>
          <Col sm="2">
            <Link to="/" className="menu-item">
              <Button variant="danger">Inicio</Button>
            </Link>
            <Button variant="danger" onClick={this.props.logout}>
              Log Out
            </Button>
          </Col>
        </Row>
      </header>
    );
  }
}

export default Header;
