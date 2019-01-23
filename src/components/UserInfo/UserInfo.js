import React, { PureComponent } from "react";
import styles from "./UserInfo.module.css";
import classes from "./UserInfo.module.css";

class UserInfo extends PureComponent {

  renderUserInfo = () => {
    const { data } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.imageWrapper}>
          <img
            className={classes.image}
            src={data.avatar_url}
            alt={data.name}
          />
        </div>
        <div>
          <p className="t-user-name">{data.name}</p>
          <p className="t-user-bio">{data.bio}</p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className={styles.root}>
        {this.renderUserInfo()}
      </div>
    );
  }
}

export default UserInfo;