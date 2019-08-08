import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MailLinksBox from '../../boxes/MailLinksBox/MailLinksBox';
import MailContainer from '../../../../containers/MailContainer/MailContainer';
import GreetingBox from '../../boxes/GreetingBox/GreetingBox';
import { withData } from '../../../../containers/Data/Data';

const MailContentLayout = ({ data }) => (
  <>
    <Switch>
      <Route path="/app/" exact component={GreetingBox} />
      <Route
        path="/app/:list"
        exact
        render={props => <MailLinksBox data={data} {...props} />}
      />
      <Route
        path="/app/:list/:id"
        component={props => <MailContainer {...props} data={data} />}
      />
    </Switch>
  </>
);

export default withData(MailContentLayout);
