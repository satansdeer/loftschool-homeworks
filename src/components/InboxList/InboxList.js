import React from 'react';
import MailList from '../MailList';
import { Switch, Route } from 'react-router-dom';
import InboxMail from '../InboxMail';

const InboxList = ({ match }) => (
  <div className="content">
    <h3 className="title">Inbox</h3>
    <Switch>
      <Route path={`${match.path}/:id`} component={InboxMail} />
      <MailList classes="t-inbox-list" type="inbox" match={match} />
    </Switch>
  </div>
);

export default InboxList;
