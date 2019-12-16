import React from "react";
import { Form, Col } from "react-bootstrap";

class AddMedicineForm extends React.Component {
  nameRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();
  tipoRef = React.createRef();
  composicionRef = React.createRef();
  cantidadRef = React.createRef();
  cantidadEnvaseRef = React.createRef();
  prescripcionRef = React.createRef();
  caducidadRef = React.createRef();
  envasesTotalesRef = React.createRef();
  pacientesRef = React.createRef();
  fabricanteRef = React.createRef();

  createMedicine = event => {
    //stop the form from submitting
    event.preventDefault();
    //create client with form data
    const medicine = {
      name: this.nameRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
      tipo: this.tipoRef.current.value,
      composicion: this.composicionRef.current.value,
      cantidad: this.cantidadRef.current.value,
      cantidadEnvase: this.cantidadEnvaseRef.current.value,
      prescripcion: this.prescripcionRef.current.value,
      caducidad: this.caducidadRef.current.value,
      envasesTotales: this.envasesTotalesRef.current.value,
      pacientes: this.pacientesRef.current.value,
      fabricante: this.fabricanteRef.current.value
    };
    //send Medicine to app component(where state lives)
    this.props.addMedicine(medicine);
    //refresh form
    event.currentTarget.reset();
  };

  render() {
    return (
      <Form className="medicine-edit row" onSubmit={this.createMedicine}>
        <a nae="top"></a>
        <Col>
          <Form.Control
            type="text"
            ref={this.nameRef}
            name="name"
            placeholder="nombre"
          />

          <textarea
            type="text"
            ref={this.descRef}
            name="desc"
            placeholder="descripcion"
          />

          <select name="tipo" ref={this.tipoRef}>
            <option value="comprimido">Comprimido</option>
            <option value="pomada">Pomada</option>
            <option value="liquido">Liquido</option>
            <option value="otro">Otro</option>
          </select>

          <Form.Control
            type="text"
            ref={this.composicionRef}
            name="composicion"
            placeholder="composicion"
          />

          <Form.Control
            type="text"
            ref={this.cantidadRef}
            name="cantidad"
            placeholder="cantidad restante"
          />

          <Form.Control
            type="text"
            ref={this.cantidadEnvaseRef}
            name="cantidad_envase"
            placeholder="cantidad del envase"
          />

          <Form.Control
            type="text"
            ref={this.prescripcionRef}
            name="prescripcion"
            placeholder="prescripcion"
          />

          <Form.Control
            type="text"
            ref={this.caducidadRef}
            name="caducidad"
            placeholder="caducidad"
          />

          <Form.Control
            type="text"
            ref={this.envasesTotalesRef}
            name="udstotales"
            placeholder="unidades totales"
          />

          <Form.Control
            type="text"
            ref={this.fabricanteRef}
            name="fabricante"
            placeholder="fabricante"
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            ref={this.imageRef}
            name="image"
            placeholder="imagen"
          />

          <textarea
            type="text"
            ref={this.pacientesRef}
            name="pacientes"
            placeholder="pacientes"
          />

          <button className="btn btn-info" title="submit">
            Añadir Medicina
          </button>
        </Col>
      </Form>
    );
  }
}

export default AddMedicineForm;
