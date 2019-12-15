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
      <Row clasName="inventario">
        <Col sm="2">
          <h2>Inventario</h2>
        </Col>
        <Col sm="10">
          <Form className="medicine-edit row">
            <Col>
              <a id={this.props.medicine.name} />
              <Form.Control
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.props.medicine.name}
              />

              <Form.Control
                as="textarea"
                type="text"
                name="desc"
                onChange={this.handleChange}
                value={this.props.medicine.desc}
              />

              <select
                name="tipo"
                onChange={this.handleChange}
                value={this.props.medicine.tipo}
              >
                <option value="comprimido">Comprimido</option>
                <option value="pomada">Pomada</option>
                <option value="liquido">Liquido</option>
                <option value="otro">Otro</option>
              </select>

              <Form.Control
                type="text"
                name="composicion"
                onChange={this.handleChange}
                value={this.props.medicine.composicion}
              />

              <Form.Control
                type="text"
                name="cantidad"
                onChange={this.handleChange}
                value={this.props.medicine.cantidad}
              />

              <Form.Control
                type="text"
                name="cantidad_envase"
                onChange={this.handleChange}
                value={this.props.medicine.cantidadEnvase}
              />

              <Form.Control
                type="text"
                name="prescripcion"
                onChange={this.handleChange}
                value={this.props.medicine.prescripcion}
              />

              <Form.Control
                type="text"
                name="caducidad"
                onChange={this.handleChange}
                value={this.props.medicine.caducidad}
              />

              <Form.Control
                type="text"
                name="uds_totales"
                onChange={this.handleChange}
                value={this.props.medicine.envasesTotales}
              />

              <Form.Control
                type="text"
                name="fabricante"
                onChange={this.handleChange}
                value={this.props.medicine.fabricante}
              />
            </Col>
            <Col>
              <img
                src={this.props.medicine.image}
                alt={this.props.medicine.name}
              />
              <Form.Control
                type="text"
                name="image"
                onChange={this.handleChange}
                value={this.props.medicine.image}
              />

              <Form.Control
                as="textarea"
                type="text"
                name="pacientes"
                onChange={this.handleChange}
                value={this.props.medicine.pacientes}
              />

              <Button type="button" onClick={this.handleDelete}>
                Borrar Medicina
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default EditMedicineForm;
