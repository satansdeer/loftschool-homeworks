import React from 'react';
import styles from './Mail.module.css';

// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
const Mail = ({ classes, to, from, body }) => {
  const { container } = styles;

  return (
    <div className={container}>
      <p className={classes}>
        {from ? 'From' : 'To'}: <b>{from || to}</b>
      </p>
      <p className="t-mail-body">{body}</p>
    </div>
  );
};

export default Mail;
