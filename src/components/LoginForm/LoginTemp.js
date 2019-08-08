import React, { Component } from 'react';
import styles from "./LoginForm.module.css";

export default class LoginTemp extends Component {
  render() {    
    
    const {authorize} = this.props;    
    return (
      <div className="LoginForm_buttons__67s-u">
        <button  className={styles.button} onClick={(e) =>authorize(this.props.state.mail, this.props.state.password)}>Test</button>
      </div>
    )
  }
}