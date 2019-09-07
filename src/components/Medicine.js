import React from "react";

class Medicine extends React.Component {
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
