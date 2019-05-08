import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShowPage from '../ShowPage';
import Search from '../Search';

// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.

const AppRouter = () => (
  <div className="App">
    <Switch>
      <Route path="/" exact component={Search} />
      <Route path="/shows/:id" exact component={ShowPage} />
    </Switch>
  </div>
);

export default AppRouter;
