import React from "react";
import PropTypes from "prop-types";

class EditMedicineForm extends React.Component {
  static propTypes = {
    medicine: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    }).isRequired,
    medicineKey: PropTypes.string.isRequired,
    deleteMedicine: PropTypes.func.isRequired
  };

  handleChange = event => {
    const updatedMedicine = {
      ...this.props.medicine,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updatedMedicine(this.props.medicineKey, updatedMedicine);
  };

  handleDelete = evento => {
    const deleteMedicine = {
      ...this.props.medicine,
      [evento.currentTarget.name]: evento.currentTarget.value
    };
    this.props.deleteMedicine(this.props.medicineKey, deleteMedicine);
  };

  render() {
    return (
      <div className="medicine-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.medicine.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.medicine.price}
        />
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.medicine.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.medicine.image}
        />
        <button type="button" onClick={this.handleDelete}>
          Delete Medicine?
        </button>
      </div>
    );
  }
}

export default EditMedicineForm;
