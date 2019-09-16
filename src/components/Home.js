import React from "react";
import { navigate } from "@reach/router";
import firebase from "firebase";
import { firebaseApp } from "../base";
import Login from "./Login";

class Home extends React.Component {
  inputStore = React.createRef();

  goToStore = event => {
    // 1. Stop the <form> from submitting
    event.preventDefault();
    // 2. Get the `name-of-botica` from <input>
    const myInput = this.inputStore.current;
    const storeName = myInput.value;
    // 3. Change the page to /store/name-of-botica
    navigate(`/botica/${storeName}`);
  };

  authHandler = async authData => {
    console.log(authData);
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  render() {
    return <Login authenticate={this.authenticate} />;
    return (
      <main className="main">
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Welcome To Your Pharmacy</h2>
          <input
            type="text"
            required
            placeholder="Store Name"
            ref={this.inputStore}
          />
          <button type="submit">Visit the Botica</button>
        </form>
      </main>
    );
  }
}

export default Home;
