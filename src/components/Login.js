import React from "react";
import PropTypes from "prop-types";
import { Jumbotron } from "react-bootstrap";

const Login = props => (
  <nav className="login container">
    <Jumbotron>
      <h2>LOGIN</h2>
      <p>Sign in to manage your store´s inventory.</p>
      <button className="google" onClick={() => props.authenticate("Google")}>
        Login with Google
      </button>
    </Jumbotron>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
