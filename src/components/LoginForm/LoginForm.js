import React, { Component } from "react";
import classes from './LoginForm.module.css';
import classNames from 'classnames'
import propTypes from "prop-types";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: true
  };

  static get propTypes() {
    return {};
  }

  static get defaultProps() {
    return {};
  }

  changeState = evt => this.setState({ [evt.target.name]: evt.target.value });


  render() {
    const { email, password, error } = this.state;
    console.log(email);
    return (
      <div className={classes.bg}>
        <div className={classNames(classes.form, 't-form')}>
          <p>
            <label htmlFor="email">
              <span className={classes.labelText}>Почта</span>
            </label>
            <input
              type="text"
              name="email"
              className={classNames(classes.input, 't-input-email')}
              value={email}
              onChange={this.changeState}
            />
          </p>
          <p>
            <label htmlFor="password">
              <span className={classes.labelText}>Пароль</span>
            </label>
            <input
              type="password"
              name="password"
              className={classNames(classes.input, 't-input-password')}
              value={password}
              onChange={this.changeState}
            />
          </p>
          {error && <p className={classes.error}>Почта или пароль не верные</p>}
          <div className="LoginForm_buttons__67s-u">
            <button type='button' className={classNames(classes.button, 't-login')}>Войти</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;