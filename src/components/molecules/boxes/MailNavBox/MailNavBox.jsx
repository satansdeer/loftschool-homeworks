import React from 'react';
import LinkItem from '../../../atoms/LinkItem/LinkItem';
import styles from './MailNavBox.module.css';

const { wrapper, container } = styles;

const MailNavBox = ({ match: { url } }) => (
  <nav className={wrapper}>
    <ul className={`${container} t-nav-list`}>
      <LinkItem path={`${url}`} text="Home" additionalClassName="t-link-home" />
      <LinkItem
        path={`${url}/inbox`}
        text="Inbox"
        additionalClassName="t-link-inbox"
      />
      <LinkItem
        path={`${url}/outbox`}
        text="OutBox"
        additionalClassName="t-link-outbox"
      />
    </ul>
  </nav>
);

export default MailNavBox;
