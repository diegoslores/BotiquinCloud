import React from "react";
import { navigate } from "@reach/router";
import PropTypes from "prop-types";
import { Button, Jumbotron } from "react-bootstrap";

import MedicineSection from "./MedicineSection";
import Header from "./Header";
import sampleMedicine from "../sample-medicine";
import firebase from "firebase/app";
import base, { firebaseApp } from "../base";
import Login from "./Login";

class App extends React.Component {
  static propTypes = {
    storeId: PropTypes.string
  };

  state = {
    medicines: {},
    uid: null,
    owner: null
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  authHandler = async authData => {
    // 1. busca el botiquin en la base de datos de firebase
    const store = await base.fetch(this.props.storeId, { context: this });
    console.log(store);
    //2. Si no existe lo  asigna al usuario
    if (!store.owner) {
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    //3. Cambia el estado del botiquin y le asigna el usuario
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
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
    // copia el estado del inventario existente
    const newMedicines = { ...this.state.medicines };
    // añade una nueva medicina
    newMedicines[`medicine${Date.now()}`] = newMedicine;
    // introduce la nueva medicina en el estado con las demás
    this.setState({ medicines: newMedicines });
  };

  updatedMedicine = (medicineKey, updatedMedicine) => {
    const updatedMedicines = { ...this.state.medicines };
    // añade la actualización de la medicina
    updatedMedicines[medicineKey] = updatedMedicine;
    this.setState({ medicines: updatedMedicines });
  };

  deleteMedicine = medicineKey => {
    const deletedMedicine = { ...this.state.medicines };
    // Actualiza la medicina eliminandola
    deletedMedicine[medicineKey] = null;
    this.setState({ medicines: deletedMedicine });
  };

  loadSampleMedicine = () => {
    this.setState({ medicines: sampleMedicine });
  };

  goToHome = event => {
    event.preventDefault();
    // Vuelve al Home.
    navigate(`/`);
  };

  logout = async () => {
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
        <Header
          goToHome={this.goToHome}
          logout={this.logout}
          storeId={this.props.storeId}
          owner={this.state.owner}
        />
        <MedicineSection
          path=":storeId"
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
