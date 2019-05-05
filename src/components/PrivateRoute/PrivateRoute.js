import React from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

// Реализуйте приватный роут.
// Он должен проверять статус авторизации
// и перенаправлять пользователя на страницу логина,
// если тот не авторизован.
let PrivateRoute = ({ isAuthorized, ...rest }) => {
  return isAuthorized ? <Route {...rest} /> : <Redirect to="/login" />;
};

export default withAuth(PrivateRoute);
