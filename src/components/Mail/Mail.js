// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React from 'react';
import styles from './Mail.module.css';

const Mail = ({ from, to, body }) => {
  const type = from ? 'from' : 'to';

  return (
    <div className={styles.container}>
      <p className={`t-mail-${type}`}>
        {type === 'from' ? 'From: ' : 'To: '}
        <strong>{from || to}</strong>
      </p>
      <p className="t-mail-body">{body}</p>
    </div>
  );
};

export default Mail;
