import React from "react";
import { Button } from "react-bootstrap";
import { navigate } from "@reach/router";

import Medicine from "./Medicine";

class Menu extends React.Component {
  goToNew = event => {
    event.preventDefault();
    navigate(`/${this.props.storeId}`);
  };
  render() {
    return (
      <div className="Menu">
        <h2>Menu</h2>

        <Button variant="info" onClick={this.props.loadSampleMedicine}>
          Carga Ejemplo
        </Button>
        <Button variant="info" onClick={this.goToNew}>
          Nuevo
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
