import React from "react";
// npm install @reach/router
import { Router } from "@reach/router";
import Home from "./Home";
import App from "./App";
import NotFound from "./NotFound";

const Routes = () => (
  <Router>
    <Home path="/" />
    <App path="/botica/:storeId" />
    <NotFound default />
  </Router>
);

export default Routes;
