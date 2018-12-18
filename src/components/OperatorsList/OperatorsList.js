import React, { Component } from "react";
import axios from "axios";

class OperatorsList extends Component {
  componentDidMount() {
    axios.get("api/operators").then(response => {
      console.log(response);
    });
  }

  render() {
    return <div>hello from the Listtt</div>;
  }
}
export default OperatorsList;
