import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../Login';
import Search from '../Search';
import styles from './Router.module.css';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

// Реализуйте роутер

// Роутер должен иметь роуты для компонентов Login и Search
// Вам потребуется использовать PrivateRoute для Search
// По умолчанию нужно перенаправлять на страницу логина
const Router = () => {
  return (
    <BrowserRouter className={styles.root}>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/search" component={Search} />
    </BrowserRouter>
  );
};

export default Router;
