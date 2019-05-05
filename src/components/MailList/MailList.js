// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React from 'react';
import styles from './MailList.module.css';
import { Link } from 'react-router-dom';

let MailList = props => {
  const { data, type, className } = props;

  return (
    <div className={`${styles.container} ${className}`}>
      {data.map(item => (
        <Link
          to={`/app/${type}/${item.id}`}
          key={`${item.id}`}
          className={styles.link}
        >
          {item.body.substr(0, 52) + '...'}
        </Link>
      ))}
    </div>
  );
};

export default MailList;
