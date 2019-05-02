import React from 'react';
import { Route } from 'react-router-dom';
import Search from '../Search';
import ShowPage from '../ShowPage';
import './AppRouter.css';

// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.
const AppRouter = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Search} />
      <Route path="/shows/:id" component={ShowPage} />
    </div>
  );
};

export default AppRouter;
