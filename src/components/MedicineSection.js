import React from "react";

import Menu from "./Menu";
import Inventory from "./Inventory";

class MedicineSection extends React.Component {
  state = {
    uid: null,
    owner: null
  };

  render() {
    return (
      <main className="main">
        <Menu
          medicine={this.props.medicine}
          addMedicine={this.props.addMedicine}
          loadSampleMedicine={this.props.loadSampleMedicine}
        />
        <p>separacion</p>
        <Inventory
          medicine={this.props.medicine}
          updateMedicine={this.props.updateMedicine}
          deleteMedicine={this.props.deleteMedicine}
        />
        <button onClick={this.props.goToHome}>Salir</button>
      </main>
    );
  }
}

export default MedicineSection;
