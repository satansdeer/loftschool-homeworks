import React, { PureComponent } from 'react';
import { Switch, NavLink, Route, Redirect, withRouter } from 'react-router-dom';
import InboxList from '../InboxList';
import styles from './AppRouter.module.css';
import Home from '../Home';
import InboxMail from '../InboxMail';
import cx from 'classnames';

class AppRouter extends PureComponent {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul className={cx(styles.navList, 't-nav-list')}>
              <li className={styles.navElement}>
                <NavLink
                  exact
                  className={cx(styles.link, 't-link-home')}
                  to="/app"
                >
                  Home
                </NavLink>
              </li>
              <li className={styles.navElement}>
                <NavLink
                  exact
                  className={cx(styles.link, 't-link-inbox')}
                  to="/app/inbox"
                >
                  Inbox
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className={styles.content}>
            <h3 className={styles.title}>
              <Switch>
                <Route path="/app" exact component={this.renderHomeTitle} />
                <Route path="/app/inbox" component={this.renderInboxTitle} />
              </Switch>
            </h3>
            <Switch>
              <Route path="/app" exact component={Home} />
              <Route path="/app/inbox" exact component={InboxList} />
              <Route path="/app/inbox/:id" component={InboxMail} />
              <Redirect to="/app" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }

  renderHomeTitle = () => 'Home';
  renderInboxTitle = () => 'Inbox';
}

export default withRouter(AppRouter);
