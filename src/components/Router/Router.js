import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from '../Login';
import Search from '../Search';
import PrivateRoute from '../PrivateRoute';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/search" component={Search} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;

// Реализуйте роутер

// Роутер должен иметь роуты для компонентов Login и Search
// Вам потребуется использовать PrivateRoute для Search
// По умолчанию нужно перенаправлять на страницу логина
