import React from "react";
import { Button, Row } from "react-bootstrap";
import { navigate } from "@reach/router";

import Medicine from "./Medicine";

class Menu extends React.Component {
  goToNew = event => {
    event.preventDefault();
    navigate(`/${this.props.storeId}`);
  };
  render() {
    return (
      <div className="menu">
        <Row>
          <Button variant="info" onClick={this.props.loadSampleMedicine}>
            Carga Ejemplo
          </Button>
          <a href="#nuevo">
            <Button variant="info" onClick={this.goToNew}>
              Nuevo
            </Button>
          </a>
          <ul className="medicines">
            {Object.keys(this.props.medicine).map(pillKey => (
              <Medicine
                key={pillKey}
                index={pillKey}
                medicineDetails={this.props.medicine[pillKey]}
              />
            ))}
          </ul>
        </Row>
      </div>
    );
  }
}

export default Menu;
