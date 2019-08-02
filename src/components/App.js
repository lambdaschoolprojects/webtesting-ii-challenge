import React, { Component } from "react";
import Display from "./Display";
import Dashboard from "./Dashboard";

class App extends Component {
  state = {
    balls: 0,
    strikes: 0
  };

  addAction = type => {
    let value = this.state[type];

    switch (type) {
      case "balls":
        if (this.state.balls < 4) value++;
        break;
      case "strikes":
        if (this.state.strikes < 3) value++;
        break;
      default:
        value++;
    }

    this.setState({ [type]: value });

    setTimeout(() => console.log(this.state), 5);
  };
  render() {
    return (
      <>
        <Display {...this.state} />
        <Dashboard addAction={this.addAction} />
      </>
    );
  }
}

export default App;
