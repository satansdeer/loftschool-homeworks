import React, { Component } from 'react';
import { withAuth, AuthProvider } from '../../context/Auth';
import Home from '../Home/Home';
// import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  // Реализуйте приватный роут.
  // Он должен проверять статус авторизации
  // и перенаправлять пользователя на страницу логина,
  // если тот не авторизован.

  state = { isAuthorized: false };

  render() {
    const { isAuthorized } = this.state;
    console.log('AuthTest');
    return (
      <AuthProvider value={{ isAuthorized }}>
        <Switch>
          <PrivateRoute path="/app" component={() => <Home />} />
        </Switch>
      </AuthProvider>
    )
  }

  privateRoute = ({ component: RouteComponent, isAuthorized }) => {
    <Route render={
      isAuthorized ? (<RouteComponent />) : (<Redirect to="/login" />)
    }/>
  }
}

PrivateRoute = withAuth(PrivateRoute);

export default withAuth(PrivateRoute);
