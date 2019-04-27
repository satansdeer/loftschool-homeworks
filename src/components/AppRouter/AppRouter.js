import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect, withRouter } from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';
import styles from './AppRouter.module.css';
import classNames from 'classnames';

class AppRouter extends Component {
  setActivePage = event => {
    this.setState({ pageTitle: event.target.innerHTML });
  };

  renderHomeTitle = () => 'Home';
  renderOutboxTitle = () => 'Outbox';
  renderInboxTitle = () => 'Inbox';

  render() {
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
            <h3 className={styles.title}>
              <Switch>
                <Route path="/app" exact component={this.renderHomeTitle} />
                <Route path="/app/outbox" component={this.renderOutboxTitle} />
                <Route path="/app/inbox" component={this.renderInboxTitle} />
              </Switch>
            </h3>
            <Switch>
              <Route path="/app" exact component={Home} />
              <Route path="/app/outbox" exact component={OutboxList} />
              <Route path="/app/inbox" exact component={InboxList} />
              <Route path="/app/outbox/:id" component={OutboxMail} />
              <Route path="/app/inbox/:id" component={InboxMail} />
              <Redirect to="/app" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AppRouter);
