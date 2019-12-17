import React from "react";
import { Form, Col, Row } from "react-bootstrap";

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
      <Form className="medicine-edit row new" onSubmit={this.createMedicine}>
        <Form.Group as={Col} md="9">
          <Form.Label>Nombre Medicamento</Form.Label>
          <Form.Control type="text" ref={this.nameRef} name="name" />
          <Form.Label>Descripción Medicamento</Form.Label>
          <Form.Control type="text" ref={this.descRef} name="desc" />
          <Form.Label>Tipo</Form.Label>
          <Form.Control as="select" name="tipo" ref={this.tipoRef}>
            <option value="comprimido">Comprimido</option>
            <option value="pomada">Pomada</option>
            <option value="liquido">Liquido</option>
            <option value="otro">Otro</option>
          </Form.Control>
          <Form.Label>Composición</Form.Label>
          <Form.Control
            type="text"
            ref={this.composicionRef}
            name="composicion"
          />
          <Form.Group as={Row}>
            <Form.Group as={Col}>
              <Form.Label>Cantidad restante</Form.Label>
              <Form.Control
                type="text"
                ref={this.cantidadRef}
                name="cantidad"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Cantidad del Envase</Form.Label>
              <Form.Control
                type="text"
                ref={this.cantidadEnvaseRef}
                name="cantidad_envase"
              />
            </Form.Group>
          </Form.Group>
          <Form.Label>Prescripción</Form.Label>
          <Form.Control
            type="text"
            ref={this.prescripcionRef}
            name="prescripcion"
          />
          <Form.Group as={Row}>
            <Form.Group as={Col}>
              <Form.Label>Fecha Caducidad</Form.Label>
              <Form.Control
                type="date"
                ref={this.caducidadRef}
                name="caducidad"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Unidades Totales</Form.Label>
              <Form.Control
                type="text"
                ref={this.envasesTotalesRef}
                name="udstotales"
              />
            </Form.Group>
          </Form.Group>
          <Form.Label>Fabricante</Form.Label>
          <Form.Control
            type="text"
            ref={this.fabricanteRef}
            name="fabricante"
          />
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Group as={Row}>
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="text"
              className="img"
              ref={this.imageRef}
              name="image"
            />
          </Form.Group>
          <Form.Label>Pacientes</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            ref={this.pacientesRef}
            name="pacientes"
          />

          <button className="btn btn-info" variant="danger" title="submit">
            Añadir Medicina
          </button>
        </Form.Group>
      </Form>
    );
  }
}

export default AddMedicineForm;
