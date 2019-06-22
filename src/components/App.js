import React, { Component } from "react";
import Display from "./Display";
import Dashboard from "./Dashboard";

class App extends Component {
  state = {
    balls: 0,
    strikes: 0
  };

  addAction = type => {
    const current = this.state[type];

    this.setState({
      [type]: current + 1
    });

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
