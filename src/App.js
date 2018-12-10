import React, { Component } from "react";
import "./App.css";
import Signup from "./components/Signup/Signup";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Vrbl Playground</h1>
        <Signup />
      </div>
    );
  }
}

export default App;
