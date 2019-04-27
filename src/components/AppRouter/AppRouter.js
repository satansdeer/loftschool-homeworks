import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import classNames from 'classnames';
import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import InboxMail from '../InboxMail';
import OutboxMail from '../OutboxMail';
import styles from './AppRouter.module.css';

export default props => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={classNames(styles.navList, 't-nav-list')}>
            <li className={styles.navElement}>
              <Link
                to="/app"
                className={classNames(styles.link, 't-link-home', {
                  active: props.location.pathname === '/app'
                })}
              >
                Home
              </Link>
            </li>
            <li className={styles.navElement}>
              <Link
                to="/app/inbox"
                className={classNames(styles.link, 't-link-inbox', {
                  active: props.location.pathname === '/app/inbox'
                })}
              >
                Inbox
              </Link>
            </li>
            <li className={styles.navElement}>
              <Link
                to="/app/outbox"
                className={classNames(styles.link, 't-link-outbox', {
                  active: props.location.pathname === '/app/outbox'
                })}
              >
                Outbox
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.content}>
          <h3 className={styles.title}>Home</h3>
          <Switch>
            <Route exact path="/app" component={Home} />
            <Route exact path="/app/inbox" component={InboxList} />
            <Route exact path="/app/outbox" component={OutboxList} />
            <Route exact path="/app/inbox/:id" component={InboxMail} />
            <Route exact path="/app/outbox/:id" component={OutboxMail} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css
