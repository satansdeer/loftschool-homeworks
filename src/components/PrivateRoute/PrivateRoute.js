import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { isAuthorized, path, component } = this.props;
    return !isAuthorized ? (
      <Redirect to="/login" />
    ) : (
      <Route to={path} component={component} />
    );
  }
  // Реализуйте приватный роут.
  // Он должен проверять статус авторизации
  // и перенаправлять пользователя на страницу логина,
  // если тот не авторизован.
}

export default withAuth(PrivateRoute);
