import React from 'react';
import styles from './Mail.module.css';

const { container } = styles;

const Mail = ({ from, to, body }) => {
  return (
    <div className={container}>
      <p className="t-mail-from t-mail-to">
        {from ? 'From' : 'To'}: <b>{from || to}</b>
      </p>
      <p className="t-mail-body">{body}</p>
    </div>
  );
};

export default Mail;
