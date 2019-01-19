import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "components/AppRouter";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
