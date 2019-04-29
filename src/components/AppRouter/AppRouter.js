import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import InboxMail from '../InboxMail';
import OutboxMail from '../OutboxMail';

import classnames from 'classnames';
import styles from './AppRouter.module.css';

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

const RegisterRoutes = () => (
  <Switch>
    <Route path="/app" exact component={Home} />
    <Route path="/app/inbox" exact component={InboxList} />
    <Route path="/app/outbox" exact component={OutboxList} />
    <Route path="/app/inbox/:id" component={InboxMail} />
    <Route path="/app/outbox/:id" component={OutboxMail} />
  </Switch>
);

class Layout extends Component {
  state = {
    pageTitle: 'Home'
  };

  setPageTitle = event => {
    this.setState({
      pageTitle: event.target.innerHTML
    });
  };

  renderNav = () => {
    return (
      <div className={styles.nav}>
        <ul className={classnames(styles.navList, 't-nav-list')}>
          <li className={styles.navElement}>
            <NavLink
              exact
              activeClassName="active"
              to="/app"
              className={classnames(styles.link, 't-link-home')}
              onClick={this.setPageTitle}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName="active"
              to="/app/inbox"
              className={classnames(styles.link, 't-link-inbox')}
              onClick={this.setPageTitle}
            >
              Inbox
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeClassName="active"
              to="/app/outbox"
              className={classnames(styles.link, 't-link-outbox')}
              onClick={this.setPageTitle}
            >
              Outbox
            </NavLink>
          </li>
        </ul>
      </div>
    );
  };

  render() {
    const { pageTitle } = this.state;

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {this.renderNav()}
          <div className={styles.content}>
            <h3 className={styles.title}>{pageTitle}</h3>
            {RegisterRoutes()}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
