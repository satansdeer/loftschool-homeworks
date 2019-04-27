import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './MailList.module.css';
const MailList = props => {
  const { data, mod, path } = props;
  return (
    <div className={classNames(styles.container, mod)}>
      {data.map(el => (
        <Link key={el.id} to={`${path}/${el.id}`} className={styles.link}>
          {el.body.substr(0, 50)}
        </Link>
      ))}
    </div>
  );
};

export default MailList;

// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
