import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';
import styles from './AppRouter.module.css';

class AppRouter extends Component {
  constructor(props) {
    super(props);

    this.state = {
        mainTitle: 'Home'
    };
  }

  onPageClick = event => {
    this.setState({ mainTitle: event.target.innerHTML });
  };

  renderLinkMenu = (props) => {
    const { label, link} = props;

    return (
      <li>
        <NavLink
          to={link}
          exact
          activeClassName="active"
          className={styles.link}
          onClick={this.onPageClick}
        >
          {label}
        </NavLink>
      </li>
    );
  }

  render() {
    const {mainTitle} = this.state;

    const listLink = [
      { label: 'Home', link: '/app' },
      { label: 'Inbox', link: '/app/inbox' },
      { label: 'Outbox', link: '/app/outbox' }
    ].map(row => this.renderLinkMenu(row));

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul className={styles.link}>
              {listLink}              
            </ul>
          </nav>
          <div className={styles.content}>
            <h3 className={styles.title}>{mainTitle}</h3>
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
