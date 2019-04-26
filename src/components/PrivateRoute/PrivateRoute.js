import React from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: RouteComponent, isAuthorized, ...rest }) => (
  // Реализуйте приватный роут.
  // Он должен проверять статус авторизации
  // и перенаправлять пользователя на страницу логина,
  // если тот не авторизован.
  <Route
    {...rest}
    render={routeProps =>
      isAuthorized ? (
        <RouteComponent {...routeProps} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default withAuth(PrivateRoute);
