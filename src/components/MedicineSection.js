import React from "react";

import Header from "./Header";
import AddMedicineForm from "./AddMedicineForm";
import Medicine from "./Medicine";

class MedicineSection extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="main">
          <p>Aqui se gestionan los clientes</p>
          <AddMedicineForm />
          <ul>
            <Medicine />
          </ul>
        </main>
      </>
    );
  }
}

export default MedicineSection;
