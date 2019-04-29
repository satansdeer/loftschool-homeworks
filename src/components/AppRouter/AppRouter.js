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

import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';
import styles from './AppRouter.module.css';
import classNames from 'classnames';
class AppRouter extends Component {
  state = {
    pageTitle: 'Home'
  };

  setActivePage = event => {
    this.setState({ pageTitle: event.target.innerHTML });
  };

  render() {
    const { pageTitle } = this.state;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul className={classNames(styles.navList, 't-nav-list')}>
              <li className={styles.navElement}>
                <NavLink
                  to="/app"
                  exact
                  activeClassName="active"
                  className={classNames(styles.link, 't-link-home')}
                  onClick={this.setActivePage}
                >
                  Home
                </NavLink>
              </li>
              <li className={styles.navElement}>
                <NavLink
                  to="/app/inbox"
                  exact
                  activeClassName="active"
                  className={classNames(styles.link, 't-link-inbox')}
                  onClick={this.setActivePage}
                >
                  Inbox
                </NavLink>
              </li>
              <li className={styles.navElement}>
                <NavLink
                  to="/app/outbox"
                  exact
                  activeClassName="active"
                  className={classNames(styles.link, 't-link-outbox')}
                  onClick={this.setActivePage}
                >
                  Outbox
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={styles.content}>
            <h3 className={styles.title}>{pageTitle}</h3>
            <Switch>
              <Route path="/app" exact component={Home} />
              <Route path="/app/inbox" exact component={InboxList} />
              <Route path="/app/outbox" exact component={OutboxList} />
              <Route path="/app/inbox/:id" component={InboxMail} />
              <Route path="/app/outbox/:id" component={OutboxMail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default AppRouter;
