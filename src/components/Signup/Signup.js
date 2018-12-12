import React, { Component } from "react";
import "./Signup.scss";
import axios from "axios";

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

  handleSubmit = first => {
    axios.post("/api/operator", { first });
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
        <button onClick={() => this.handleSubmit(this.state.first)}>
          Submit Profile
        </button>
      </>
    );
  }
}

export default Signup;
