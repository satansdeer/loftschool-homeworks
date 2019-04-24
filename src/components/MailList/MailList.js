// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React, { PureComponent } from 'react';
import styles from './MailList.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';

class MailList extends PureComponent {
  render() {
    const { mails, className } = this.props;
    return (
      <div className={cn(styles.container, className)}>
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
