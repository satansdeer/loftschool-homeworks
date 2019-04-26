import React from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

const OutboxMail = props => {
  const {
    match: {
      params: { id }
    },
    data: { outbox }
  } = props;

  return <Mail classes="t-mail-to" {...outbox.find(mail => mail.id === id)} />;
};

export default withData(OutboxMail);
