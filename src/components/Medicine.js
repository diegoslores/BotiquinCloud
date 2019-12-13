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
      envasesTotales,
      pacientes,
      fabricante
    } = this.props.medicineDetails;

    return (
      <li className="menu-medicine">
        <a href=`#${name}`>
          <Button variant="info" className="medicine-name">
            {name}
          </Button>
        </a>
        <div className="oculto">
          {desc}
          {image}
          {tipo}
          {composicion}
          {cantidad}
          {cantidadEnvase}
          {prescripcion}
          {caducidad}
          {envasesTotales}
          {pacientes}
          {fabricante}
        </div>
      </li>
    );
  }
}

export default Medicine;
