import React from "react";
import { navigate } from "@reach/router";

class Home extends React.Component {
  inputStore = React.createRef();

  goToStore = event => {
    // 1. Stop the <form> from submitting
    event.preventDefault();
    // 2. Get the `name-of-botica` from <input>
    const myInput = this.inputStore.current;
    const storeName = myInput.value;
    // 3. Change the page to /store/name-of-botica
    navigate(`/${storeName}`);
  };

  render() {
    return (
      <main className="main">
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter in the Store</h2>
          <input
            type="text"
            required
            placeholder="Store Name"
            ref={this.inputStore}
            defaultValue="mibotica"
          />
          <button type="submit">Visit the Botica</button>
        </form>
      </main>
    );
  }
}

export default Home;
