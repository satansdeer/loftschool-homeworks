import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MailHeaderBox from '../../boxes/MailHeaderBox/MailHeaderBox';

const MailHeaderBoxLayout = () => (
  <>
    <Switch>
      <Route path="/app/" exact component={MailHeaderBox} />
      <Route path="/app/:list" component={MailHeaderBox} />
    </Switch>
  </>
);

export default MailHeaderBoxLayout;
