import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Login";
import PrivateRoute from "../PrivateRoute";
import Search from "../Search";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Login}/>
        <PrivateRoute
          component={Search}
        />
      </Switch>
    );
  }
}

export default Router;