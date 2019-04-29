// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './MailList.module.css';

class MailList extends Component {
  renderOneMail(mail) {
    const { match } = this.props;
    const tilte = mail.body.slice(0, 55);

    return (
      <Link
        key={mail.id}
        className={styles.link}
        to={`${match.url}/${mail.id}`}
      >
        {`${tilte}...`}
      </Link>
    );
  }

  render() {
    const { mailData } = this.props;
    return mailData.map(mail => this.renderOneMail(mail));
  }
}

export default MailList;
