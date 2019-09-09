import React from "react";

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
