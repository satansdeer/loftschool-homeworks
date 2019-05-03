// Реализуйте компонент Home
// Он должен показывать приветствие.
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import styles from './Home.module.css';
class Home extends Component {
  render() {
    return (
      <div className={styles.container}>Приветствуем в почтовом клиенте!</div>
    );
  }
}

export default Home;
