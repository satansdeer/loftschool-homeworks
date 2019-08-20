import React, { Component, Fragment } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { isAuthorized, component: RouteComponent } = this.props;
    return (
      <Fragment>
        {isAuthorized ? (
          <Route component={RouteComponent} />
        ) : (
          <Redirect to="/login" />
        )}
      </Fragment>
    );
  }
}

export default withAuth(PrivateRoute);
