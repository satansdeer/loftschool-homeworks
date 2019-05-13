// Реализуйте роутер

// Роутер должен иметь роуты для компонентов Login и Search
// Вам потребуется использовать PrivateRoute для Search
// По умолчанию нужно перенаправлять на страницу логина

import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Login from '../Login';
import Search from '../Search';


export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/search" component={Search}/>
      <Redirect to="/login"/>
    </Switch>
  </BrowserRouter>
)
