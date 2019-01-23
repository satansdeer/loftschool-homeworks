import React, { PureComponent } from "react";
import styles from "./followers.module.css";
import {} from "../../modules/Followers";
import cx from "classnames";

class Followers extends PureComponent {
  renderFollowers = () => {
    const { data } = this.props;
    return data.map(item => {
      return (
        <div key={item.id} className={styles.follower}>
          <img className={styles.followerImg} src={item.avatar_url}/>
          <p className={styles.followerLogin}>{item.login}</p>
        </div>
      );
    });
  };

  render() {
    const { data } = this.props;
    return (
      <div className={cx(styles.root, "t-followers")}>
        {data && data.length && this.renderFollowers()}
      </div>
    );
  }
}


export default Followers;