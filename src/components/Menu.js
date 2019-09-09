import React from "react";
import AddMedicineForm from "./AddMedicineForm";
import Medicine from "./Medicine";

class Menu extends React.Component {
  render() {
    return (
      <div className="Menu">
        <h2>Menu</h2>
        <AddMedicineForm addMedicine={this.props.addMedicine} />
        <button onClick={this.props.loadSampleMedicine}>
          Load pills Samples
        </button>

        <ul className="medicines">
          <p>listado</p>
          {Object.keys(this.props.medicines).map(pillKey => (
            <Medicine
              key={pillKey}
              index={pillKey}
              medicineDetails={this.props.medicines[pillKey]}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
