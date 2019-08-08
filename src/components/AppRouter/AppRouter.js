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

export default class AppRouter extends Component {
  state = {
    title: 'Home'
  };

  changeSection = e => {
    this.setState({ title: e.target.innerHTML });
  };

  render() {
    const { title } = this.state;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul className={classNames(styles.navList, 't-nav-list')}>
              <li className={styles.navElement}>
                <NavLink
                  to="/app"
                  onClick={this.changeSection}
                  exact
                  activeClassName="active"
                  className={classNames(styles.link, 't-link-home')}
                >
                  Home
                </NavLink>
              </li>
              <li className={styles.navElement}>
                <NavLink
                  to="/app/inbox"
                  onClick={this.changeSection}
                  exact
                  activeClassName="active"
                  className={classNames(styles.link, 't-link-inbox')}
                >
                  Inbox
                </NavLink>
              </li>
              <li className={styles.navElement}>
                <NavLink
                  to="/app/outbox"
                  onClick={this.changeSection}
                  exact
                  activeClassName="active"
                  className={classNames(styles.link, 't-link-outbox')}
                >
                  OutBox
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <Switch>
              <Route path="/app" component={Home} exact />
              <Route path="/app/inbox" component={InboxList} exact />
              <Route path="/app/outbox" component={OutboxList} exact />
              <Route path="/app/inbox/:id" component={InboxMail} />
              <Route path="/app/outbox/:id" component={OutboxMail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
