import React from "react";
import PropTypes from "prop-types";
import { Button, Jumbotron } from "react-bootstrap";
import { Link } from "@reach/router";

const Login = props => (
  <main className="login container">
    <Jumbotron>
      <form className="store-selector">
        <h2>Accede con tu cuenta de Google</h2>
        <Button variant="info" onClick={() => props.authenticate("Google")}>
          Login
        </Button>
        <Link to="/">
          <Button variant="info">Home</Button>
        </Link>
      </form>
    </Jumbotron>
  </main>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
