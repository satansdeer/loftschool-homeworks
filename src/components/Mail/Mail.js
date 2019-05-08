import styles from './Mail.module.css';
import React from 'react';

const Mail = mail => (
  <div className={styles.container}>
    <p className={`t-mail-${mail.to ? 'to' : 'from'}`}>
      {mail.from ? `From: ${mail.from}` : `To: ${mail.to}`}
    </p>
    <p className="t-mail-body">{mail.body}</p>
  </div>
);

export default Mail;
