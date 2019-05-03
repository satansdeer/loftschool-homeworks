import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    return <div>PrivateRoute</div>;
  }
}

export default withAuth(PrivateRoute);
