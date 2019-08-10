import React from "react";
import { navigate } from "@reach/router";

class baseClients extends React.Component {
  goToClients = event => {
    // 1. stop the <form> from submitting
    event.preventDefault();
    // 2. change the page to /clientes/base
    navigate(`/store/base`);
  };

  render() {
    return (
      <form className="enterBase" onSubmit={this.goToClients}>
        <h2>Access to Clients base</h2>
        <button type="submit">Clients</button>
      </form>
    );
  }
}

export default baseClients;
