import React from "react";
import PropTypes from "prop-types";

class Medicine extends React.Component {
  static propTypes = {
    medicineDetails: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const { name, desc, image, price } = this.props.medicineDetails;

    return (
      <li className="menu-medicine">
        <h4 className="medicine-name">
          {name}
          <span className="points">{price}</span>
        </h4>

        <p>{desc}</p>
        <p>{image}</p>
      </li>
    );
  }
}

export default Medicine;
