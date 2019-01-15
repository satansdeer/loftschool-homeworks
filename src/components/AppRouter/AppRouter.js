import React, { Component } from "react";
import { withData } from "../../context/Data";
import { NavLink, Route, Switch } from "react-router-dom";
import classes from "./AppRouter.module.css";
import propTypes from "prop-types";
import classNames from "classnames";
import Home from "../Home";
import MailList from "../MailList";
import Mail from "../Mail";


class AppRouter extends Component {

  title = "home";

  static get propTypes() {
    return {
      data: propTypes.object.isRequired,
      match: propTypes.object,
      location: propTypes.object,
      history: propTypes.object
    };
  }

  upperFirst = word => `${word[0].toUpperCase()}${word.slice(1)}`;

  renderLink = () => {
    const { match, data } = this.props;
    return Object.keys(data).map(item => {
      return (
        <li key={item} className={classes.navElement}>
          <NavLink
            exact
            to={`${match.url}/${item}`}
            className={classNames(classes.link, `t-link-${item}`)}
          >
            {this.upperFirst(item)}
          </NavLink>
        </li>
      );
    });
  };

  getTitle = () => {
    const { data, location } = this.props;
    if (!data) return this.title;
    return Object.keys(data).find(item => location.pathname.includes(item)) || this.title;
  };

  render() {
    const { match } = this.props;
    return (
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <nav className={classNames(classes.nav, "t-nav-list")}>
            <ul className={classNames(classes.navList)}>
              <li className={classNames(classes.navElement)}>
                <NavLink
                  exact
                  to={`${match.url}`}
                  className={classNames(classes.link, "t-link-home")}
                  activeClassName='active'
                >
                  Home
                </NavLink>
              </li>
              {this.renderLink()}
            </ul>
          </nav>
          <div className={classes.content}>
            <h3 className={classes.title}>{this.upperFirst(this.getTitle())}</h3>
            <Switch>
              <Route exact path={`${match.path}`} component={Home}/>
              <Route path={`${match.path}/:path/:id`} component={Mail}/>
              <Route path={`${match.path}/:path`} component={MailList}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default withData(AppRouter);