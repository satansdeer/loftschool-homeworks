import React, { Component } from 'react';
import styles from './Home.module.css';
import {Link} from "react-router-dom";

// Реализуйте компонент Home
// Он должен показывать приветствие.
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

export default class Home extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <nav className={styles.nav__container}>
            <ul className="AppRouter_navList__1tc9Z t-nav-list">
              <li className="AppRouter_navElement__1PKRz">
                <Link to="/app">Home</Link>
              </li>
              <li className="AppRouter_navElement__1PKRz">
                <Link to="/app/inbox">Inbox</Link>
              </li>
              <li className="AppRouter_navElement__1PKRz">
                <Link to="/app/outbox">Outbox</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.header}>
            <h3 className={styles.title}>Home</h3>
            <div className="Home_container__3RoMF">
              <p className="t-greeting">Приветствуем в почтовом клиенте!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
