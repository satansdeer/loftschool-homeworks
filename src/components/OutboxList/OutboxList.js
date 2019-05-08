import MailList from '../MailList';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import OutboxMail from '../OutboxMail';

const OutboxList = ({ match }) => (
  <div className="content">
    <h3 className="title">Outbox</h3>
    <Switch>
      <Route path={`${match.path}/:id`} component={OutboxMail} />
      <MailList classes="t-outbox-list" type="outbox" match={match} />
    </Switch>
  </div>
);

export default OutboxList;
