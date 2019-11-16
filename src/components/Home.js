import React from "react";
import { navigate } from "@reach/router";
import { Button, Jumbotron } from "react-bootstrap";

class Home extends React.Component {
  inputStore = React.createRef();

  goToStore = event => {
    // 1. Stop the <form> from submitting
    event.preventDefault();
    // 2. Get the `name-of-botica` from <input>
    const myInput = this.inputStore.current;
    const storeName = myInput.value;
    // 3. Change the page to /store/name-of-botica
    navigate(`/botica/${storeName}`);
  };

  render() {
    return (
      <main className="main container">
        <Jumbotron>
          <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Bienvenido a BotiquinCloud</h2>
            <input
              type="text"
              required
              placeholder="Nombre de botiquin"
              ref={this.inputStore}
            />
            <Button variant="info" type="submit">
              Acceso
            </Button>
          </form>
        </Jumbotron>
      </main>
    );
  }
}

export default Home;
