import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

class EditMedicineForm extends React.Component {
  handleChange = event => {
    const updatedMedicine = {
      ...this.props.medicine,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateMedicine(this.props.medicineKey, updatedMedicine);
  };

  handleDelete = event => {
    const deletedMedicine = {
      ...this.props.medicine,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.deleteMedicine(this.props.medicineKey, deletedMedicine);
  };

  render() {
    return (
      <>
        <a id={this.props.medicine.name} />
        <p className="vhide"></p>
        <Form className="medicine-edit row med">
          <Form.Group as={Col} md="9">
            <Form.Label>Nombre Medicamento</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.props.medicine.name}
            />
            <Form.Label>Descripción Medicamento</Form.Label>
            <Form.Control
              type="text"
              name="desc"
              onChange={this.handleChange}
              value={this.props.medicine.desc}
            />
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              as="select"
              name="tipo"
              onChange={this.handleChange}
              value={this.props.medicine.tipo}
            >
              <option value="comprimido">Comprimido</option>
              <option value="pomada">Pomada</option>
              <option value="liquido">Liquido</option>
              <option value="otro">Otro</option>
            </Form.Control>
            <Form.Label>Composición</Form.Label>
            <Form.Control
              type="text"
              name="composicion"
              onChange={this.handleChange}
              value={this.props.medicine.composicion}
            />
            <Form.Group as={Row}>
              <Form.Group as={Col}>
                <Form.Label>Cantidad restante</Form.Label>
                <Form.Control
                  type="text"
                  name="cantidad"
                  onChange={this.handleChange}
                  value={this.props.medicine.cantidad}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Cantidad del Envase</Form.Label>
                <Form.Control
                  type="text"
                  name="cantidad_envase"
                  onChange={this.handleChange}
                  value={this.props.medicine.cantidadEnvase}
                />
              </Form.Group>
            </Form.Group>
            <Form.Label>Prescripción</Form.Label>
            <Form.Control
              type="text"
              name="prescripcion"
              onChange={this.handleChange}
              value={this.props.medicine.prescripcion}
            />
            <Form.Group as={Row}>
              <Form.Group as={Col}>
                <Form.Label>Fecha Caducidad</Form.Label>
                <Form.Control
                  type="date"
                  name="caducidad"
                  onChange={this.handleChange}
                  value={this.props.medicine.caducidad}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Unidades Totales</Form.Label>
                <Form.Control
                  type="text"
                  name="uds_totales"
                  onChange={this.handleChange}
                  value={this.props.medicine.envasesTotales}
                />
              </Form.Group>
            </Form.Group>
            <Form.Label>Fabricante</Form.Label>
            <Form.Control
              type="text"
              name="fabricante"
              onChange={this.handleChange}
              value={this.props.medicine.fabricante}
            />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <img
              src={this.props.medicine.image}
              alt={this.props.medicine.name}
            />
            <Form.Group as={Row}>
              <Form.Label>Pacientes</Form.Label>
              <Form.Control
                as="textarea"
                type="text"
                name="pacientes"
                onChange={this.handleChange}
                value={this.props.medicine.pacientes}
              />
            </Form.Group>
            <Button type="button" variant="info" onClick={this.handleDelete}>
              Borrar Medicina
            </Button>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default EditMedicineForm;
