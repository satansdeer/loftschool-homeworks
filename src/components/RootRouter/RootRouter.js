import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import LoginForm from "../LoginForm";
import AppRouter from "../AppRouter";
import { AuthProvider } from "../../context/Auth";
import { DataProvider } from "../../context/Data";

export default () => (
  <DataProvider>
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LoginForm}/>
          <PrivateRoute path={'/app'} component={AppRouter} redirectPath={'/'}/>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  </DataProvider>
);

//  <Route exact path='/' component={LoginForm}/>