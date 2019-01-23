import React from "react";
import ReactDOM from "react-dom";
import Router from "./components/Router";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router/>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);