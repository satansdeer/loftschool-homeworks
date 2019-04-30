import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AuthProvider} from '../../context/Auth';
import {DataProvider} from '../../context/Data';
import LoginForm from "../LoginForm";
import Home from "../Home/Home"

// Мы оборачиваем наши роуты в несколько провайдеров
// DataProvider - предоставляет обьект data с имейлами.
// AuthProvider - предоставляет метод авторизации authorize
//                и текущий статус isAuthorized
// BrowserRouter - провайдер react-router-dom.

export default () => (
  <DataProvider>
    <AuthProvider>
      <BrowserRouter>
        <Switch>
        <Route path="/" component={LoginForm} exact/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/app" component={Home}/>
          {/*
            Добавьте роуты /app и /login.
            Роут /app должен быть доступен 
            только авторизованному пользователю,
            используйте приватный роут.
            По умолчанию должен происходить редирект
            на страницу логина.

            /app будет использовать AppRouter в качестве вью
            /login будет использовать LoginForm
          */}
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  </DataProvider>
);
