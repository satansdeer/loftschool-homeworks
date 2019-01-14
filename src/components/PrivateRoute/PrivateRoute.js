import React, { Component } from "react";
import { withAuth } from "../../context/Auth";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends Component {
  render() {
    const { component: PrivateComponent, isAuthorized, redirectPath, path } = this.props;
    return (
      <Route path={path} render={(props) => isAuthorized ? <PrivateComponent {...props}/> : <Redirect to={redirectPath}/>}/>
    );
  }
}

export default withAuth(PrivateRoute);
