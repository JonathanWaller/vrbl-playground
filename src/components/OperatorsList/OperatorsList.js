import React, { Component } from "react";
import axios from "axios";
import "./OperatorsList.scss";

class OperatorsList extends Component {
  constructor() {
    super();
    this.state = {
      operators: [],
      firstName: "",
      operatorCardClass: "operator__card",
      operatorCardClassPurple: "operator__purple"
    };
  }
  componentDidMount() {
    axios.get("/operators").then(response => {
      //   console.log(response);
      this.setState({ operators: response.data });
    });
  }

  componentDidUpdate() {
    this.setState({ operatorCardClass: "operator__purple" });
  }

  updateFirstName = e => {
    this.setState({ firstName: e });
  };

  submitFirstName = () => {};

  render() {
    console.log(this.state);
    let operatorsList = this.state.operators.map((operator, id) => {
      return (
        <div key={id} className={this.state.operatorCardClass}>
          <div>{operator.name_last}</div>
          <div>{operator.name_first}</div>
          <input
            onChange={e => {
              this.updateFirstName(e.target.value);
            }}
            placeholder="change first name"
          />
          <button
            onClick={() => {
              this.submitFirstName(this.state.firstName);
            }}
          >
            Submit new first name
          </button>
        </div>
      );
    });
    return (
      <div>
        <h1>hello from the Listtt</h1>
        {operatorsList}
      </div>
    );
  }
}
export default OperatorsList;
