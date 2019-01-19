import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import classes from "./AppRouter.module.css";
import Search from "../Search";
import ShowPage from "../ShowPage";

class AppRouter extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Switch>
          <Route exact path='/' component={Search}/>
          <Route path='/shows/:id' component={ShowPage}/>
          <Redirect to={"/"}/>
        </Switch>
      </div>
    );
  }
}

export default AppRouter;