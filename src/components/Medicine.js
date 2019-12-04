import React from "react";
import { Button } from "react-bootstrap";

class Medicine extends React.Component {
  render() {
    const {
      name,
      desc,
      image,
      tipo,
      composicion,
      cantidad,
      cantidadEnvase,
      prescripcion,
      caducidad,
      udstotales,
      pacientes,
      fabricante
    } = this.props.medicineDetails;

    return (
      <li className="menu-medicine">
        <Button variant="info" className="medicine-name">
          {name}
        </Button>
        <div className="oculto">
          {desc}
          {image}
          {tipo}
          {composicion}
          {cantidad}
          {cantidadEnvase}
          {prescripcion}
          {caducidad}
          {udstotales}
          {pacientes}
          {fabricante}
        </div>
      </li>
    );
  }
}

export default Medicine;
