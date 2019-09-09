import React from "react";

import EditMedicineForm from "./EditMedicineForm";

class Inventory extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Inventory;