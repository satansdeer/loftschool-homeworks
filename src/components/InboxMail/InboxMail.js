import React from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

const InboxMail = props => {
  const {
    match: {
      params: { id }
    },
    data: { inbox }
  } = props;

  return <Mail classes="t-mail-from" {...inbox.find(mail => mail.id === id)} />;
};

export default withData(InboxMail);
