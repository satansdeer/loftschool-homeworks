// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.

import React from 'react';
import { Route } from 'react-router-dom';
import Search from '../Search';
import Show from '../ShowPage';
import './AppRouter.css';

const AppRouter = () => (
  <div className="App">
    <Route exact path="/" component={Search} />
    <Route path="/show/:id" component={Show} />
  </div>
);

export default AppRouter;
