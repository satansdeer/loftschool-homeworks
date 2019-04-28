// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MailList.module.css';

const MailList = ({ mailData, match }) => {
  return mailData.map(mail => {
    return (
      <Link
        to={`${match.url}/${mail.id}`}
        key={mail.id}
        className={styles.link}
      >
        {`${mail.body.slice(0, 52)}...`}
      </Link>
    );
  });
};

export default MailList;
