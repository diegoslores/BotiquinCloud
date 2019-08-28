import React from "react";
// npm install @reach/router
import { Router } from "@reach/router";

import ClientSection from "./ClientSection";
import Home from "./Home";
import NotFound from "./NotFound";
import "../css/App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <ClientSection path="/clientes" />
        <NotFound default />
      </Router>
    );
  }
}

export default App;
