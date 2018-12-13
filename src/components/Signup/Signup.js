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

  //   handleFirst = e => {
  //     this.setState({ first: e.target.value });
  //   };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (last, first, role, rate) => {
    axios.post("/api/operator", { last, first, role, rate });
  };

  render() {
    console.log(this.state);
    const { last, first, role, rate } = this.state;
    return (
      <>
        <h1>Signup as Operator</h1>
        <div>First Name</div>
        {/* <input onChange={e => this.handleFirst(e)} /> */}
        <input name="first" onChange={e => this.handleChange(e)} />
        <div>Last Name</div>
        <input name="last" onChange={e => this.handleChange(e)} />
        <div>Role</div>
        <input name="role" onChange={e => this.handleChange(e)} />
        <div>Desired Rate</div>
        <input name="rate" onChange={e => this.handleChange(e)} />
        <button onClick={() => this.handleSubmit(last, first, role, rate)}>
          Submit Profile
        </button>
      </>
    );
  }
}

export default Signup;
