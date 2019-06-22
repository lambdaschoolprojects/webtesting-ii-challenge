import React, { Component } from "react";
import Display from "./Display";
import Dashboard from "./Dashboard";

class App extends Component {
  render() {
    return (
      <>
        <Display />
        <Dashboard />
      </>
    );
  }
}

export default App;
