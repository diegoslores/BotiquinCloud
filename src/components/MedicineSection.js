import React from "react";
import { Col, Row } from "react-bootstrap";

import Menu from "./Menu";
import Inventory from "./Inventory";
import AddMedicineForm from "./AddMedicineForm";

class MedicineSection extends React.Component {
  render() {
    return (
      <main className="main-medicine row">
        <Col sm="2">
          <Menu
            medicine={this.props.medicine}
            addMedicine={this.props.addMedicine}
            loadSampleMedicine={this.props.loadSampleMedicine}
            storeId={this.props.storeId}
          />
        </Col>
        <Col sm="10">
          <AddMedicineForm
            medicine={this.props.medicine}
            addMedicine={this.props.addMedicine}
          />
          <Inventory
            medicine={this.props.medicine}
            updateMedicine={this.props.updateMedicine}
            deleteMedicine={this.props.deleteMedicine}
          />
        </Col>
      </main>
    );
  }
}

export default MedicineSection;
