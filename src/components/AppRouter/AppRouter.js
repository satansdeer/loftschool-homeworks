import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import style from './AppRouter.module.css';


import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';

class AppRouter extends Component {
    state = {
        pageTitle: 'Home'
    }

    setActivePage = event => {
        this.setState({ pageTitle: event.target.textContent })
    }

    renderLink = (title, url, className) => {
        const { match } = this.props,
            to = `${match.url}${url}`;

        return (
            <li className={style.navElement}>
                <NavLink
                    className={classNames(style.link, className)}
                    activeClassName={'active'}
                    to={to}
                    exact={!url}
                    onClick={this.setActivePage}>
                    {title}
                </NavLink>
            </li>
        )
    }

    render() {
        const { pageTitle } = this.state,
            { match } = this.props;


        return (
            <div className={style.wrapper}>
                <div className={style.container}>
                    <nav className={style.nav}>
                        <ul className={classNames(style.navList, 't-nav-list')}>
                            {this.renderLink('Home', '', 't-link-home')}
                            {this.renderLink('Inbox', '/inbox', 't-link-inbox')}
                            {this.renderLink('OutBox', '/outbox', 't-link-outbox')}
                        </ul>
                    </nav>
                    <div className={style.content}>
                        <h3 className={style.title}> {pageTitle} </h3>
                        <Route path={match.url} exact component={Home} />
                        <Route path={`${match.url}/inbox`} exact component={InboxList} />
                        <Route path={`${match.url}/inbox/:id`} component={InboxMail} />
                        <Route path={`${match.url}/outbox`} exact component={OutboxList} />
                        <Route path={`${match.url}/outbox/:id`} component={OutboxMail} />
                    </div>
                </div>
            </div>
        )
    }
}

export default AppRouter;