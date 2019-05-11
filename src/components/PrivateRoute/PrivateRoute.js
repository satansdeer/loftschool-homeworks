// Реализуйте приватный роут.
// Он должен проверять статус авторизации
// и перенаправлять пользователя на страницу логина,
// если тот не авторизован.  

import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../../context/Auth';

class PrivateRoute extends Component {
  render() {
    const { isAuthorized, component } = this.props;
    return isAuthorized ? (
      <Route path="/app" component={component} />
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default withAuth(PrivateRoute);
