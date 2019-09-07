import React from "react";
import { navigate } from "@reach/router";

import AddMedicineForm from "./AddMedicineForm";
import EditMedicineForm from "./EditMedicineForm";
import Medicine from "./Medicine";

class MedicineSection extends React.Component {
  state = {
    medicines: {}
  };

  goToHome = event => {
    // 1. Stop the <form> from submitting
    event.preventDefault();
    // 2. Return to home page.
    navigate(`/`);
  };
  render() {
    return (
      <main className="main">
        <p>Aqui se gestiona la botica</p>
        <AddMedicineForm addMedicine={this.props.addMedicine} />
        <button onClick={this.props.loadSampleMedicines}>
          Load pills Samples
        </button>
        <button onClick={this.goToHome}>Salir</button>

        <div className="inventario">
          <h2>Inventario</h2>
          {Object.keys(this.props.medicines).map(pillKey => (
            <EditMedicineForm
              key={pillKey}
              medicineKey={pillKey}
              medicine={this.props.medicines[pillKey]}
              updateMedicine={this.props.updateMedicine}
              deleteMedicine={this.props.deleteMedicine}
            />
          ))}
        </div>

        <ul className="medicines">
          {Object.keys(this.props.medicines).map(pillKey => (
            <Medicine
              key={pillKey}
              index={pillKey}
              medicineDetails={this.props.medicines[pillKey]}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default MedicineSection;
