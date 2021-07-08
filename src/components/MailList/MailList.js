// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './MailList.module.css';
import cx from 'classnames';

class MailList extends PureComponent {
  render() {
    const { mails, className } = this.props;

    return (
      <div className={cx(styles.container, className)}>
        {mails.map(({ title, link }) => (
          <Link className={styles.link} key={link} to={link}>
            {title}
          </Link>
        ))}
      </div>
    );
  }
}

export default MailList;
