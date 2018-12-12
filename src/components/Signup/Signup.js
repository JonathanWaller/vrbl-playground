import React, { Component } from "react";
import "./Signup.scss";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      first: "",
      last: "",
      role: "",
      rate: null
    };
  }

  handleFirst = e => {
    this.setState({ first: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <h1>Signup as Operator</h1>
        <div>First Name</div>
        <input onChange={e => this.handleFirst(e)} />
        <div>Last Name</div>
        <input />
        <div>Role</div>
        <input />
        <div>Desired Rate</div>
        <input />
        <button>Submit Probile</button>
      </>
    );
  }
}

export default Signup;
