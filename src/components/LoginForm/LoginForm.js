// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app
import React, { Component, Fragment } from 'react';
import { withAuth } from '../../context/Auth';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

class LoginForm extends Component {
  state = { email: ``, password: `` };

  handleChange = e => {
    const input = e.target;
    this.setState({ [input.name]: input.value });
  };

  handleSumbit = () => {
    const { authorize } = this.props;
    const { email, password } = this.state;

    authorize(email, password);
  };

  render() {
    const { authError, isAuthorized } = this.props;
    return (
      <Fragment>
        {isAuthorized ? (
          <Redirect to="/app" />
        ) : (
          <div className="bg">
            <div className="form t-form">
              <p>
                <label className="labelText" htmlFor="email">
                  Почта
                </label>
                <input
                  className="t-input-email input"
                  type="text"
                  name="email"
                  autoCorrect="off"
                  onChange={this.handleChange}
                />
              </p>
              <p>
                <label className="labelText" htmlFor="password">
                  Пароль
                </label>
                <input
                  className="t-input-password input"
                  type="password"
                  name="password"
                  autoCorrect="off"
                  onChange={this.handleChange}
                />
              </p>

              <p className="error">{authError}</p>
              <div className="buttons">
                <button className="button t-login" onClick={this.handleSumbit}>
                  Войти
                </button>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default withAuth(LoginForm);
