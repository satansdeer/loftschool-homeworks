import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {
    const { isAuthorized } = this.props;
    console.log(isAuthorized);
  }

  render() {
    const { isAuthorized } = this.props;
    return <div>!</div>;
  }
}

export default withAuth(PrivateRoute);
