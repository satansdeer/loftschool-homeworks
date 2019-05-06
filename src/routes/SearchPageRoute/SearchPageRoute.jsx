import React from 'react';
import { Route } from 'react-router-dom';
import SearchPage from '../../components/pages/SearchPage/SearchPage';

const SearchPageRoute = props => (
  <Route render={() => <SearchPage {...props} />} />
);

export default SearchPageRoute;
