import React from "react";
import AddMedicineForm from "./AddMedicineForm";
import Medicine from "./Medicine";
import { Button } from "react-bootstrap";

class Menu extends React.Component {
  render() {
    return (
      <div className="Menu">
        <h2>Menu</h2>
        <AddMedicineForm addMedicine={this.props.addMedicine} />
        <Button variant="info" onClick={this.props.loadSampleMedicine}>
          Carga Ejemplo
        </Button>

        <ul className="medicines">
          {Object.keys(this.props.medicine).map(pillKey => (
            <Medicine
              key={pillKey}
              index={pillKey}
              medicineDetails={this.props.medicine[pillKey]}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Menu;
