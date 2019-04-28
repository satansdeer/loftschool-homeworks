import React, { Component } from 'react';
import styles from './Mail.module.css';

class Mail extends Component {
  render() {
    const { to, from, body } = this.props;
    const mailType = from ? 'from' : 'to';

    return (
      <div className={styles.container}>
        <p className={`t-mail-${mailType}`}>
          {mailType === 'from' ? 'From: ' : 'To: '}
          <strong>{from || to}</strong>
        </p>
        <p className="t-mail-body">{body}</p>
      </div>
    );
  }
}

export default Mail;