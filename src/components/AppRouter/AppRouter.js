// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail
import React, { useState } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';

import OutboxList from '../OutboxList';
import InboxMail from '../InboxMail';
import OutboxMail from '../OutboxMail';
import styles from './AppRouter.module.css';

const AppRouter = () => {
  const {
    container,
    content,
    link,
    nav,
    navElement,
    navList,
    title,
    wrapper
  } = styles;

  const [pageName, setPageName] = useState('Home');

  const onClick = e => setPageName(e.target.innerText);

  return (
    <div className={wrapper}>
      <div className={container}>
        <nav className={nav}>
          <ul className={`${navList} t-nav-list`}>
            <li className={navElement}>
              <NavLink
                exact
                className={`${link} t-link-home`}
                activeClassName="active"
                to="/app"
                onClick={onClick}
              >
                Home
              </NavLink>
            </li>
            <li className={navElement}>
              <NavLink
                exact
                className={`${link} t-link-inbox`}
                activeClassName="active"
                to="/app/inbox"
                onClick={onClick}
              >
                Inbox
              </NavLink>
            </li>
            <li className={navElement}>
              <NavLink
                exact
                className={`${link} t-link-outbox`}
                activeClassName="active"
                to="/app/outbox"
                onClick={onClick}
              >
                Outbox
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={content}>
          <h3 className={title}>{pageName}</h3>
          <Route exact path="/app" component={Home} />
          <Route exact path="/app/inbox" component={InboxList} />
          <Route exact path="/app/outbox" component={OutboxList} />
          <Route path="/app/inbox/:id" component={InboxMail} />
          <Route path="/app/outbox/:id" component={OutboxMail} />
        </div>
      </div>
    </div>
  );
};
// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css

export default AppRouter;
