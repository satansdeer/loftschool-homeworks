import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withAuth } from '../../containers/Auth/Auth';
import LoginForm from '../../components/organisms/LoginForm/LoginForm';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const AuthForm = withAuth(LoginForm);
const withAuthPrivateRoute = withAuth(PrivateRoute);

const MainRouter = props => (
  <Switch>
    <Route path="/" exact component={AuthForm} />
    <Route path="/app" component={withAuthPrivateRoute} />
  </Switch>
);

export default withAuth(MainRouter);
