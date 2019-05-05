// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.
import React from 'react';
import { Route } from 'react-router-dom';
import Search from '../Search';
import ShowPage from '../ShowPage';

import styles from './AppRouter.module.css';

const AppRouter = () => (
  <div className={styles.App}>
    <Route exact path="/" component={Search} />
    <Route exact path="/shows/:id" component={ShowPage} />
  </div>
);

export default AppRouter;
