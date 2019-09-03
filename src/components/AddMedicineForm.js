import React from "react";
import PropTypes from "prop-types";

class AddMedicineForm extends React.Component {
  static propTypes = {
    addclient: PropTypes.func.isRequired
  };

  nameRef = React.createRef();
  surnameRef = React.createRef();
  ageRef = React.createRef();
  phoneRef = React.createRef();
  pointsRef = React.createRef();
  citasRef = React.createRef();

  createClient = event => {
    //stop the form from submitting
    event.preventDefault();
    //create client with form data
    const medicine = {
      name: this.nameRef.current.value,
      surname: this.surnameRef.current.value,
      age: this.ageRef.current.value,
      phone: this.phoneRef.current.value,
      points: this.pointsRef.current.value,
      citas: this.citasRef.current.value
    };
    //send Medicine to app component(where state lives)
    this.props.addMedicine(medicine);
    //refresh form
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="medicine-edit" onSubmit={this.createMedicine}>
        <input
          type="text"
          ref={this.nameRef}
          name="name"
          placeholder="Nombre"
        />
        <input
          type="text"
          ref={this.surnameRef}
          name="surname"
          placeholder="Apellidos"
        />
        <input type="text" ref={this.ageRef} name="age" placeholder="Edad" />
        <input
          type="text"
          ref={this.phoneRef}
          name="phone"
          placeholder="Telefono"
        />
        <input
          type="text"
          ref={this.pointsRef}
          name="points"
          placeholder="Puntos"
        />
        <input
          type="text"
          ref={this.citasRef}
          name="citas"
          placeholder="Citas"
        />
        <button title="submit"> Añadir Medicina</button>
      </form>
    );
  }
}

export default AddMedicineForm;
