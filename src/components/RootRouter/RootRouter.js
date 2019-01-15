import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import LoginForm from "../LoginForm";
import AppRouter from "../AppRouter";
import { AuthProvider } from "../../context/Auth";
import { DataProvider } from "../../context/Data";

const baseUrl = "/login";

export default () => (
  <DataProvider>
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <PrivateRoute
            path={"/app"}
            component={AppRouter}
            startUrl={baseUrl}
          />
          <Route path={baseUrl} component={LoginForm}/>
          <Redirect to={baseUrl}/>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  </DataProvider>
);