import React, { Component } from "react";
import axios from "axios";

class OperatorsList extends Component {
  constructor() {
    super();
    this.state = {
      operators: []
    };
  }
  componentDidMount() {
    axios.get("api/operators").then(response => {
      //   console.log(response);
      this.setState({ operators: response.data });
    });
  }

  render() {
    console.log(this.state);
    let operatorsList = this.state.operators.map((operator, id) => {
      return (
        <div key={id}>
          <div>{operator.name_last}</div>
          <div>{operator.name_first}</div>
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
