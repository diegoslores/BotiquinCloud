import React from "react";
import PropTypes from "prop-types";

class AddMedicineForm extends React.Component {
  static propTypes = {
    addMedicine: PropTypes.func.isRequired
  };

  nameRef = React.createRef();
  priceRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createClient = event => {
    //stop the form from submitting
    event.preventDefault();
    //create client with form data
    const medicine = {
      name: this.nameRef.current.value,
      price: this.priceRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
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
          ref={this.priceRef}
          name="price"
          placeholder="Precio"
        />
        <input
          type="text"
          ref={this.descRef}
          name="desc"
          placeholder="Descripcion"
        />
        <input
          type="text"
          ref={this.imageRef}
          name="image"
          placeholder="Imagen"
        />

        <button title="submit"> Añadir Medicina</button>
      </form>
    );
  }
}

export default AddMedicineForm;
