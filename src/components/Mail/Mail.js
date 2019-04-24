// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React, { PureComponent } from 'react';
import styles from './Mail.module.css';

class Mail extends PureComponent {
  render() {
    const { classname, toFromLabel, toFrom, body } = this.props;
    return (
      <div className={styles.container}>
        <p className={classname}>
          {toFromLabel}: <b>{toFrom}</b>
        </p>
        <p className="t-mail-body">{body}</p>
      </div>
    );
  }
}

export default Mail;
