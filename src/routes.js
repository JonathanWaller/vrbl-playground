import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Signup from "./components/Signup/Signup";

export default (
  <Switch>
    <Route exact path="/home" component={App} />
    <Route path="/signup" component={Signup} />
  </Switch>
);
