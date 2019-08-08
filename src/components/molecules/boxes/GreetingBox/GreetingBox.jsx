import React from 'react';
import styles from './GreetingBox.module.css';

const { container } = styles;
const GREETING = 'Приветствуем в почтовом клиенте!';

const GreetingBox = () => (
  <div className={container}>
    <p className="t-greeting">{GREETING}</p>
  </div>
);

export default GreetingBox;
