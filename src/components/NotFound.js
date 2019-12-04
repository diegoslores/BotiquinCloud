import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "@reach/router";

class NotFound extends React.Component {
  render() {
    const inicio = (
      <Link to="/">
        <Button variant="danger">Inicio</Button>
      </Link>
    );

    return (
      <main className="main container">
        <Jumbotron>
          <h1>Ups! Page not found!</h1>
          {inicio}
        </Jumbotron>
      </main>
    );
  }
}

export default NotFound;
