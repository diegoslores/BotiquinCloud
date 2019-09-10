import React from "react";
import { navigate } from "@reach/router";

import MedicineSection from "./MedicineSection";
import sampleMedicine from "../sample-medicine";
import base from "../base";

class App extends React.Component {
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
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
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

  render() {
    return (
      <MedicineSection
        path="/botica/:storeId"
        medicine={this.state.medicines}
        addMedicine={this.addMedicine}
        loadSampleMedicine={this.loadSampleMedicine}
        updateMedicine={this.updatedMedicine}
        deleteMedicine={this.deleteMedicine}
        goToHome={this.goToHome}
      />
    );
  }
}

export default App;
