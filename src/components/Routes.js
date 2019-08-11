import React from "react";
// npm install @reach/router
import { Router } from "@reach/router";
import BaseClients from "./BaseClients";
import App from "./App";
import NotFound from "./NotFound";

//Componente
const Routes = () => (
  <Router>
    <BaseClients path="/" />
    <App path="/base/listadoclientes" />
    <NotFound default />
  </Router>
);

export default Routes;
