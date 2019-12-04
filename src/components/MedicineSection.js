import React from "react";

import Menu from "./Menu";
import Inventory from "./Inventory";
import Login from "./Login";
import Header from "./Header";

import firebase from "firebase/app";
import base, { firebaseApp } from "../base";
import { Button, Jumbotron } from "react-bootstrap";

class MedicineSection extends React.Component {
  state = {
    uid: null,
    owner: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async authData => {
    // 1. Look up the current store in the firebase database
    const store = await base.fetch(this.props.storeId, { context: this });
    console.log(store);
    //2. claim it if there's no previous owner
    if (!store.owner) {
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    //3. set the state of the inventory to reflect the current user
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
    console.log(authData);
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    console.log("Logging out");
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

  render() {
    const logout = (
      <Button variant="danger" onClick={this.logout}>
        Log Out
      </Button>
    );

    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }
    if (this.state.uid !== this.state.owner) {
      return (
        <main className="container">
          <Jumbotron>
            <h2>No eres el Propietario</h2>
            {logout}
            <Button variant="danger" onClick={this.props.goToHome}>
              Inicio
            </Button>
          </Jumbotron>
        </main>
      );
    }
    return (
      <>
        <Header goToHome={this.props.goToHome} logout={this.logout} />
        <main className="main">
          <Menu
            medicine={this.props.medicine}
            addMedicine={this.props.addMedicine}
            loadSampleMedicine={this.props.loadSampleMedicine}
          />
          <p>separacion</p>
          <Inventory
            medicine={this.props.medicine}
            updateMedicine={this.props.updateMedicine}
            deleteMedicine={this.props.deleteMedicine}
          />
          <button onClick={this.props.goToHome}>Salir</button>
        </main>
      </>
    );
  }
}

export default MedicineSection;
