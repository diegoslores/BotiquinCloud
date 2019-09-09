import React from "react";
// npm install @reach/router
import { Router } from "@reach/router";
import { navigate } from "@reach/router";

import MedicineSection from "./MedicineSection";
import Home from "./Home";
import NotFound from "./NotFound";
import sampleMedicine from "../sample-medicine";

class App extends React.Component {
  state = {
    medicines: {}
  };

  addMedicine = newMedicine => {
    // take a copy of existing state
    const newMedicines = { ...this.state.medicines };
    // add newMedicine to newMedicines
    newMedicines[`medicine${Date.now()}`] = newMedicine;
    // set newMedicines as the new state
    this.setState({ medicines: newMedicines });
  };

  /*updatedMedicine = (medicineKey, updatedMedicine) => {
    // take a copy of existing state
    const updatedMedicines = { ...this.state.medicines };
    // add our updatedMedicine to updatedMedicine
    updatedMedicines[medicineKey] = updatedMedicine;
    // set updatedMedicine as the new state
    this.setState({ medicines: updatedMedicines });
  };

  deleteMedicine = medicineKey => {
    // take a copy of existing state
    const deleteMedicine = { ...this.state.medicines };
    // add our updatedMedicine to updatedMedicine
    deleteMedicine[medicineKey] = null;
    // set updatedMedicine as the new state
    this.setState({ medicines: deleteMedicine });
  };*/

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
      <Router>
        <Home path="/" />
        <MedicineSection
          path="/:storeId"
          medicines={this.state.medicines}
          addMedicine={this.addMedicine}
          loadSampleMedicine={this.loadSampleMedicine}
          updateMedicine={this.updatedMedicine}
          deleteMedicine={this.deleteMedicine}
          goToHome={this.goToHome}
        />
        <NotFound default />
      </Router>
    );
  }
}

export default App;
