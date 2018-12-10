import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
// import Signup from "./components/Signup/Signup";
import Nav from "./components/Nav/Nav";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Welcome to Vrbl Playground</h1>
          <Nav />
          {routes}
          {/* <Signup /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
