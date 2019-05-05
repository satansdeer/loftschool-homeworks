import React from 'react';
import { Switch } from 'react-router-dom';
import SearchPageRoute from '../SearchPageRoute/SearchPageRoute';
import ShowPageRoute from '../ShowPageRoute';

const MainLayout = props => {
  console.log('пропсы в MainLayout', props);
  return (
    <Switch>
      <SearchPageRoute exact path="/" {...props} />
      <ShowPageRoute path="/shows/:id" {...props} />
    </Switch>
  );
};

export default MainLayout;
