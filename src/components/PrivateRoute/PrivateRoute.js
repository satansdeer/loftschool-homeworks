import React from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

// Реализуйте приватный роут.
// Он должен проверять статус авторизации
// и перенаправлять пользователя на страницу логина,
// если тот не авторизован.

const PrivateRoute = ({ isAuthorized, ...etc }) =>
  isAuthorized ? <Route {...etc} /> : <Redirect to="/login" />;

export default withAuth(PrivateRoute);
