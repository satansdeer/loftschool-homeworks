import React from 'react';
import { Switch } from 'react-router-dom';
import SearchPageRoute from '../SearchPageRoute/SearchPageRoute';
import ShowPageRoute from '../ShowPageRoute';

const MainLayout = props => (
  <Switch>
    <SearchPageRoute exact path="/" {...props} />
    <ShowPageRoute exact path="/shows/:id" {...props} />
  </Switch>
);

export default MainLayout;
