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
      <a href={"#" + name}>
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
          {envasesTotales}
          {pacientes}
          {fabricante}
        </div>
      </a>
    );
  }
}

export default Medicine;
