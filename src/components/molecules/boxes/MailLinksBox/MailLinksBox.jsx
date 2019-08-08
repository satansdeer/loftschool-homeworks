import React from 'react';
import MailListLinkItem from '../../../atoms/MailListLinkItem/MailListLinkItem';
import styles from './MailLinksBox.module.css';

const { containerlinks } = styles;

const MailLinksBox = ({
  data,
  match: {
    url,
    params: { list }
  }
}) => {
  return (
    <div className={`${containerlinks} t-inbox-list t-outbox-list`}>
      {data[list].map(({ id, body }) => (
        <MailListLinkItem
          path={`${url}/${id}`}
          key={id}
          text={`${body.slice(0, 52)}...`}
        />
      ))}
    </div>
  );
};

export default MailLinksBox;
