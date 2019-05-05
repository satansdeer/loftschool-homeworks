import React from 'react';
import { Switch } from 'react-router-dom';
import SearchPageRoute from '../SearchPageRoute/SearchPageRoute';

const MainLayout = props => {
  console.log('пропсы в MainLayout', props);
  return (
    <Switch>
      <SearchPageRoute exact path="/" {...props} />
      {/* <OrderPageRoute path="/orderpage" {...props} />
			<CatalogPageRoute path="/catalog" {...props} />
			<ErrorPageRoute /> */}
    </Switch>
  );
};

export default MainLayout;
