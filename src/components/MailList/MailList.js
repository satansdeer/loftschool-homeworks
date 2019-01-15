import React, { Component } from "react";
import propTypes from "prop-types";
import classes from "./MailList.module.css";
import classNames from "classnames";
import { withData } from "../../context/Data";
import { NavLink } from "react-router-dom";

class MailList extends Component {

  static get propTypes() {
    return {
      data: propTypes.object.isRequired
    };
  }

  renderList = () => {
    const { match, data } = this.props;
    if (!data) return null;
    return data[match.params.path].map(item => {
      return (
        <NavLink
          key={item.id}
          exact
          to={`${match.url}/${item.id}`}
          className={classes.link}
        >
          {`${item.body.slice(0, 53)}...`}
        </NavLink>
      );
    });
  };

  render() {
    const { path } = this.props.match.params;
    return (
      <div className={classNames(classes.container, `t-${path}-list`)}>
        {this.renderList()}
      </div>
    );
  }
}

export default withData(MailList);