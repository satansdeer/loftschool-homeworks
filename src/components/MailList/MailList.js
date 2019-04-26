import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MailList.module.css';

// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
const MailList = ({ classes, mails, location: { pathname } }) => {
  const { container, link } = styles;

  return (
    <div className={`${container}  ${classes}`}>
      {mails.map(m => (
        <Link key={m.id} className={link} to={`${pathname}/${m.id}`}>
          {`${m.body.slice(0, 52)}...`}
        </Link>
      ))}
    </div>
  );
};

export default MailList;
