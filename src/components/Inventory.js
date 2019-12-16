import React from "react";
import EditMedicineForm from "./EditMedicineForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventario">
        {Object.keys(this.props.medicine).map(pillKey => (
          <EditMedicineForm
            key={pillKey}
            medicineKey={pillKey}
            medicine={this.props.medicine[pillKey]}
            updateMedicine={this.props.updateMedicine}
            deleteMedicine={this.props.deleteMedicine}
          />
        ))}
      </div>
    );
  }
}

export default Inventory;
