import React from "react";
import { Button, Col } from "react-bootstrap";

import Medicine from "./Medicine";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <Col className="medicines">
          <Button variant="info" onClick={this.props.loadSampleMedicine}>
            Carga Ejemplo
          </Button>
          <a href="#top">
            <Button variant="info" onclick="scrollToTop()">
              Nuevo
            </Button>
          </a>

          {Object.keys(this.props.medicine).map(pillKey => (
            <Medicine
              key={pillKey}
              index={pillKey}
              medicineDetails={this.props.medicine[pillKey]}
            />
          ))}
        </Col>
      </div>
    );
  }
}

export default Menu;
