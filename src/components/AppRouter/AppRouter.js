// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.

  
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import search from '../Search';
import showPage from '../ShowPage';

import './AppRouter.css';

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={search} />
            <Route path="/show/:id" component={showPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;