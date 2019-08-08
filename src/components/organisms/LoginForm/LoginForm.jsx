import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styles from './LoginForm.module.css';

const { bg, labelText, button, buttons, error, form, input } = styles;

export default class LoginForm extends Component {
  redirectToMailPage = () => <Redirect to="/app" />;

  changeEmail = ({ target: { value } }) => this.props.changeEmail(value);

  changePassword = ({ target: { value } }) => this.props.changePassword(value);

  disabledFunc = event => event.preventDefault();

  renderMainLayout = ({
    email,
    password,
    changeEmail,
    changePassword,
    authError,
    authorize,
    isAuthorized
  }) => (
    <div className={bg}>
      <div className={`${form} t-form`}>
        <p>
          <label htmlFor="email">
            <span className={labelText}>Почта</span>
          </label>
          <input
            className={`${input} t-input-email`}
            type="text"
            name="email"
            value={email}
            onChange={this.changeEmail}
            autoComplete="off"
            onPaste={this.disabledFunc}
            onDrop={this.disabledFunc}
          />
        </p>
        <p>
          <label htmlFor="password">
            <span className={labelText}>Пароль</span>
          </label>
          <input
            className={`${input} t-input-password`}
            type="password"
            name="password"
            value={password}
            onChange={this.changePassword}
            autoComplete="off"
            onPaste={this.disabledFunc}
            onDrop={this.disabledFunc}
          />
        </p>
        {authError && <p className={error}>{authError}</p>}
        <div className={buttons}>
          <button className={`${button} t-login`} onClick={authorize}>
            Войти
          </button>
        </div>
      </div>
    </div>
  );

  render() {
    const { isAuthorized, ...restProps } = this.props;
    return isAuthorized
      ? this.redirectToMailPage()
      : this.renderMainLayout({ ...restProps });
  }
}
