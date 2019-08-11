import React from "react";
import Header from "./Header";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main clasName="main">
          <p>Esto es el home</p>
        </main>
      </>
    );
  }
}

export default Home;
