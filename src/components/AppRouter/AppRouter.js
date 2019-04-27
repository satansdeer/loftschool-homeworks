import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import InboxMail from '../InboxMail';
import OutboxMail from '../OutboxMail';
import styles from './AppRouter.module.css';

export default props => {
  const { pathname } = props.location;
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={classNames(styles.navList, 't-nav-list')}>
            <li className={styles.navElement}>
              <NavLink
                exact
                to="/app"
                activeClassName="active"
                className={classNames(styles.link, 't-link-home')}
              >
                Home
              </NavLink>
            </li>
            <li className={styles.navElement}>
              <NavLink
                to="/app/inbox"
                activeClassName="active"
                className={classNames(styles.link, 't-link-inbox')}
              >
                Inbox
              </NavLink>
            </li>
            <li className={styles.navElement}>
              <NavLink
                to="/app/outbox"
                activeClassName="active"
                className={classNames(styles.link, 't-link-outbox')}
              >
                Outbox
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.content}>
          <h3 className={styles.title}>
            {pathname === '/app'
              ? 'Home'
              : pathname === '/app/inbox'
              ? 'Inbox'
              : 'Outbox'}
          </h3>
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
