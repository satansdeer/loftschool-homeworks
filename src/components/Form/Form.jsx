import React, { Component } from 'react';
import './Form.css';
import bond from './assets/bond_approve.jpg';
// const { Provider, Consumer } = React.createContext();

class Form extends Component {
  state = {
    first: '',
    last: '',
    pass: '',
    auth: false,
    firstErr: '',
    lastErr: '',
    passErr: ''
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      firstErr: '',
      lastErr: '',
      passErr: ''
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.validate();
  };

  validate() {
    const { first, last, pass } = this.state;

    if (first === 'james' && last === 'bond' && pass === '007') {
      this.setState({ auth: true });
    } else {
      this.errorInput(first, last, pass);
    }
  }

  errorInput(first, last, pass) {
    first === ''
      ? this.setState({ firstErr: 'Нужно указать имя' })
      : this.setState({ firstErr: 'Имя указано не верно' });

    last === ''
      ? this.setState({ lastErr: 'Нужно указать фамилию' })
      : this.setState({ lastErr: 'Фамилия указана не верно' });

    pass === ''
      ? this.setState({ passErr: 'Нужно указать пароль' })
      : this.setState({ passErr: 'Пароль указан не верно' });
  }

  render() {
    let { first, last, pass, auth, firstErr, lastErr, passErr } = this.state;
    return (
      <div className="app-container">
        {auth ? (
          <img className="t-bond-image" alt="Bond" src={bond} />
        ) : (
          <form className="form__buttons" onSubmit={this.onSubmit}>
            <h3>Введите свои данные, агент:</h3>
            <p className="field">
              <lable className="field__label">
                <span className="field-label">Name:</span>
              </lable>
              <input
                onChange={this.onChange}
                className="field-input field__label t-input-firstname"
                type="text"
                value={first}
                name="first"
              />
              <span className="field__error t-error-firstname t-error-firstname">
                {firstErr}
              </span>
            </p>

            <p className="field">
              <lable className="field__label">
                <span className="field-label">Last name:</span>
              </lable>
              <input
                onChange={this.onChange}
                className="field-input field__label t-input-lastname"
                type="text"
                value={last}
                name="last"
              />
              <span className="field__error t-error-lastname t-error-lastname">
                {lastErr}
              </span>
            </p>

            <p className="field">
              <lable className="field__label">
                <span className="field-label">Password:</span>
              </lable>
              <input
                onChange={this.onChange}
                className="field-input field__label t-input-password"
                type="text"
                value={pass}
                name="pass"
              />
              <span className="field__error t-error-password t-error-password">
                {passErr}
              </span>
            </p>
            <div className="form__buttons">
              <input className="t-submit button" type="submit" value="Login" />
            </div>
          </form>
        )}
      </div>
    );
  }
}
export default Form;
