import React from "react";
import PropTypes from "prop-types";

class Medicine extends React.Component {
  static propTypes = {
    medicineDetails: PropTypes.shape({
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      age: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      points: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      citas: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const {
      name,
      surname,
      age,
      phone,
      points,
      citas,
      status
    } = this.props.medicineDetails;

    const isNotAvailable = status === "unavailable";

    return (
      <li className="menu-medicine">
        <h4 className="medicine-name">
          {name}
          <span className="points">{points}</span>
        </h4>
        <p>{surname}</p>
        <p>{age}</p>
        <p>{phone}</p>
        <p>{citas}</p>
      </li>
    );
  }
}

export default Medicine;
