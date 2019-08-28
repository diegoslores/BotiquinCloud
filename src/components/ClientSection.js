import React from "react";

import Header from "./Header";
import AddClientForm from "./AddClientForm";

class ClientSection extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="main">
          <p>Aqui se gestionan los clientes</p>
          <AddClientForm />
        </main>
      </>
    );
  }
}

export default ClientSection;
