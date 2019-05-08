import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Link, Route } from 'react-router-dom';
import './AppRouter.css';
import HomeComponent from '../Home/Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';

class AppRouter extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="nav">
            <ul className="navList t-nav-list">
              <li className="navElement">
                <Link className="t-link-home" to="/app">
                  Home
                </Link>
              </li>
              <li className="navElement">
                <Link className="t-link-inbox" to="/app/inbox">
                  Inbox
                </Link>
              </li>
              <li className="navElement">
                <Link className="t-link-outbox" to="/app/outbox">
                  Outbox
                </Link>
              </li>
            </ul>
          </div>
          <Route exact path="/app" component={HomeComponent} />
          <Route path="/app/inbox" component={InboxList} />
          <Route path="/app/outbox" component={OutboxList} />
        </div>
      </div>
    );
  }
}

export default withAuth(AppRouter);
