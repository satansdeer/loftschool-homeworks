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
import { Link, Switch } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import styles from './AppRouter.module.css';
import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import InboxMail from '../InboxMail';
import OutboxMail from '../OutboxMail';

class AppRouter extends Component {
  state = {
    activeRoute: 'Home'
  };

  routeClickHandler = event => {
    let linksCollection = document.getElementsByClassName(
      `${event.target.classList[0]}`
    );
    Array.from(linksCollection).forEach(element => {
      element.classList.remove('active');
    });

    event.target.classList.add('active');
    this.setState({ activeRoute: event.target.innerText });
  };

  render() {
    const { match } = this.props;
    const { activeRoute } = this.state;

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul className={`${styles.navList} t-nav-list`}>
              <li className={styles.navElement}>
                <Link
                  className={`${styles.link} t-link-home active`}
                  to={`${match.url}`}
                  onClick={this.routeClickHandler}
                >
                  Home
                </Link>
              </li>
              <li className={styles.navElement}>
                <Link
                  className={`${styles.link} t-link-inbox`}
                  to={`${match.url}/inbox`}
                  onClick={this.routeClickHandler}
                >
                  Inbox
                </Link>
              </li>
              <li className={styles.navElement}>
                <Link
                  className={`${styles.link} t-link-outbox`}
                  to={`${match.url}/outbox`}
                  onClick={this.routeClickHandler}
                >
                  Outbox
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.content}>
            <h3 className={styles.title}>{activeRoute}</h3>
            <Switch>
              <PrivateRoute exact path={`${match.url}`} component={Home} />
              <PrivateRoute
                exact
                path={`${match.url}/inbox`}
                component={InboxList}
              />
              <PrivateRoute
                exact
                path={`${match.url}/outbox`}
                component={OutboxList}
              />
              <PrivateRoute
                path={`${match.url}/inbox/:id`}
                component={InboxMail}
              />
              <PrivateRoute
                path={`${match.url}/outbox/:id`}
                component={OutboxMail}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default AppRouter;
