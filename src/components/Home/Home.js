import React, { PureComponent } from "react";
import classes from "./Home.module.css";

class Home extends PureComponent {
  render() {
    return (
      <div className={classes.container}>
        <p className="t-greeting">Приветствуем в почтовом клиенте!</p>
      </div>
    );
  }
}

export default Home;