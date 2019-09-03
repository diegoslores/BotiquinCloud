import React from "react";
// npm install @reach/router
import { Router } from "@reach/router";

import MedicineSection from "./MedicineSection";
import Home from "./Home";
import NotFound from "./NotFound";
import "../css/App.css";

class App extends React.Component {
  state = {
    medicines: {}
  };

  addFish = newMedicine => {
    // take a copy of existing state
    const newMedicines = { ...this.state.medicines };
    // add newMedicine to newMedicines
    newMedicines[`medicine${Date.now()}`] = newMedicine;
    // set newMedicines as the new state
    this.setState({ fishes: newMedicines });
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
    const deleteMedicine = { ...this.state.medicines };
    // add our updatedMedicine to updatedMedicine
    deleteMedicine[medicineKey] = null;
    // set updatedMedicine as the new state
    this.setState({ medicines: deleteMedicine });
  };

  render() {
    return (
      <Router>
        <Home path="/" />
        <MedicineSection
          path="/mibotica"
          medicines={this.state.medicines}
          addMedicine={this.addMedicine}
        />
        <NotFound default />
      </Router>
    );
  }
}

export default App;
