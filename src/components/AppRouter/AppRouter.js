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
import React, { PureComponent } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import styles from './AppRouter.module.css';
import cn from 'classnames';
import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';
import InboxMail from '../InboxMail';

const TitleHome = () => 'Home';
const TitleInbox = () => 'Inbox';
const TitleOutbox = () => 'Outbox';

class AppRouter extends PureComponent {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul className={cn(styles.navList, 't-nav-list')}>
              <li className={styles.navElement}>
                <NavLink
                  activeClassName='active'
                  className={cn(styles.link, 't-link-home')}
                  aria-current="page"
                  to="/app"
                >
                  Home
                </NavLink>
              </li>
              <li className={styles.navElement}>
                <NavLink
                  activeClassName='active'
                  className={cn(styles.link, 't-link-inbox')}
                  to="/app/inbox"
                >
                  Inbox
                </NavLink>
              </li>
              <li className={styles.navElement}>
                <NavLink
                  activeClassName='active'
                  className={cn(styles.link, 't-link-outbox')}
                  to="/app/outbox"
                >
                  Outbox
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={styles.content}>
            <h3 className={styles.title}>
              <Switch>
                <Route exact path="/app" component={TitleHome} />
                <Route path="/app/inbox" component={TitleInbox} />
                <Route path="/app/outbox" component={TitleOutbox} />
              </Switch>
            </h3>
            <Switch>
              <Route exact path="/app" component={Home} />
              <Route exact path="/app/inbox" component={InboxList} />
              <Route exact path="/app/outbox" component={OutboxList} />
              <Route path={`/app/inbox/`} component={InboxMail} />
              <Route path={`/app/outbox/`} component={OutboxMail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default AppRouter;
