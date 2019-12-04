import React from "react";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";

import MedicineSection from "./MedicineSection";
import Header from "./Header";
import sampleMedicine from "../sample-medicine";
import firebase from "firebase/app";
import base, { firebaseApp } from "../base";

import Login from "./Login";
import { Button, Jumbotron } from "react-bootstrap";

class App extends React.Component {
  static propTypes = {
    storeId: PropTypes.string
  };

  state = {
    medicines: {}
  };

  componentDidMount() {
    //sync data from firebase
    const config = {
      context: this,
      state: "medicines"
    };
    this.ref = base.syncState(`${this.props.storeId}/medicines`, config);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentDidUpdate() {
    localStorage.setItem(this.props.storeId, JSON.stringify(this.state.order));
  }

  addMedicine = newMedicine => {
    // take a copy of existing state
    const newMedicines = { ...this.state.medicines };
    // add newMedicine to newMedicines
    newMedicines[`medicine${Date.now()}`] = newMedicine;
    // set newMedicines as the new state
    this.setState({ medicines: newMedicines });
  };

  updatedMedicine = (medicineKey, updatedMedicine) => {
    // take a copy of existing state
    const updatedMedicines = { ...this.state.medicines };
    // add our updatedMedicine to updatedMedicine
    updatedMedicines[medicineKey] = updatedMedicine;
    // set updatedMedicine as the new state
    this.setState({ medicines: updatedMedicines });
  };

  deleteMedicine = medicineKey => {
    // take a copy of existing state
    const deletedMedicine = { ...this.state.medicines };
    // add our updatedMedicine to updatedMedicine
    deletedMedicine[medicineKey] = null;
    // set updatedMedicine as the new state
    this.setState({ medicines: deletedMedicine });
  };

  loadSampleMedicine = () => {
    this.setState({ medicines: sampleMedicine });
  };

  goToHome = event => {
    // 1. Stop the <form> from submitting
    event.preventDefault();
    // 2. Return to home page.
    navigate(`/`);
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
        <Header goToHome={this.goToHome} logout={this.logout} />
        <MedicineSection
          path="/botica/:storeId"
          medicine={this.state.medicines}
          addMedicine={this.addMedicine}
          loadSampleMedicine={this.loadSampleMedicine}
          updateMedicine={this.updatedMedicine}
          deleteMedicine={this.deleteMedicine}
          storeId={this.props.storeId}
        />
      </>
    );
  }
}

export default App;
