import React from "react";
import PropTypes from "prop-types";

import AddMedicineForm from "./AddMedicineForm";
import Medicine from "./Medicine";

class MedicineSection extends React.Component {
  static propTypes = {
    medicines: PropTypes.object.isRequired,
    loadSampleMedicines: PropTypes.func.isRequired
  };
  state = {
    fishes: {}
  };

  render() {
    return (
      <main className="main">
        <p>Aqui se gestiona la botica</p>
        <AddMedicineForm />
        <button onClick={this.props.loadSampleMedicines}>
          Load pills Samples
        </button>
        <ul className="medicines">
          {Object.keys(this.props.medicines).map(pillKey => (
            <Medicine
              key={pillKey}
              index={pillKey}
              fishDetails={this.props.medicines[pillKey]}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default MedicineSection;
