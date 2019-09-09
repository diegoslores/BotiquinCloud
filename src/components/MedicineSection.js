import React from "react";

import Menu from "./Menu";
import Inventory from "./Inventory";

class MedicineSection extends React.Component {
  render() {
    return (
      <main className="main">
        <p>Aqui se gestiona la botica</p>
        <Menu
          medicines={this.props.medicines}
          addMedicine={this.props.addMedicine}
          loadSampleMedicine={this.props.loadSampleMedicine}
        />
        <Inventory
          medicines={this.props.medicines}
          updateMedicine={this.props.updateMedicine}
          deleteMedicine={this.props.deleteMedicine}
        />

        <button onClick={this.props.goToHome}>Salir</button>
      </main>
    );
  }
}

export default MedicineSection;
