import React from 'react';
import styles from './MailHeaderBox.module.css';

const { header__title } = styles;

const INBOX_HEADER = 'inbox';
const OUTBOX_HEADER = 'outbox';

const switcherTitle = name => {
  switch (name) {
    case INBOX_HEADER:
      return 'Inbox';

    case OUTBOX_HEADER:
      return 'Outbox';

    default:
      return 'Header';
  }
};

const MailHeaderBoxBox = ({
  match: {
    params: { list }
  }
}) => <h3 className={header__title}>{switcherTitle(list)}</h3>;

export default MailHeaderBoxBox;
