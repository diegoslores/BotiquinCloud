import React from "react";

import Menu from "./Menu";
import Inventory from "./Inventory";
import Login from "./Login";

import firebase from "firebase";
import base, { firebaseApp } from "../base";

class MedicineSection extends React.Component {
  state = {
    uid: null,
    owner: null
  };

  authHandler = async authData => {
    // 1. Look up the current store in the firebase database
    const store = await base.fetch(this.props.storeId, { context: this });
    console.log(store);
    //claim it if there's no previous owner
    if (!store.owner) {
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    //set the state of the inventory to reflect the current user
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
      .then(this.authHandleeer);
  };

  render() {
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>No eres el propietario.</p>
        </div>
      );
    }
    return (
      <main className="main">
        <p>Aqui se gestiona la botica</p>
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
    );
  }
}

export default MedicineSection;
