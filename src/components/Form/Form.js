import React, { Component } from 'react';
import FormInput from './FormInput';
import './Form.css';
import bond from './assets/bond_approve.jpg';

export default class Form extends Component {
  state = {
    name: '',
    lastName: '',
    password: '',
    errorName: '',
    errorLastName: '',
    errorPassword: '',
    logged: false
  };

  submitName = e => {
    const { name, value } = e.target;

    if (name === 'firstname') {
      this.setState({ name: value });
    } else if (name === 'lastname') {
      this.setState({ lastName: value });
    } else if (name === 'password') {
      this.setState({ password: value });
    }

    this.setState({
      errorName: '',
      errorLastName: '',
      errorPassword: ''
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, lastName, password } = this.state;

    name === ''
      ? this.setState({ errorName: 'Нужно указать имя' })
      : name !== 'James'
      ? this.setState({ errorName: 'Имя указано не верно' })
      : undefined;

    lastName === ''
      ? this.setState({ errorLastName: 'Нужно указать фамилию' })
      : lastName !== 'Bond'
      ? this.setState({ errorLastName: 'Фамилия указана не верно' })
      : undefined;

    password === ''
      ? this.setState({ errorPassword: 'Нужно указать пароль' })
      : password !== '007'
      ? this.setState({ errorPassword: 'Пароль указан не верно' })
      : undefined;

    name === 'James' && lastName === 'Bond' && password === '007'
      ? this.setState({ logged: true })
      : undefined;
  };

  render() {
    const {
      logged,
      name,
      errorName,
      lastName,
      errorLastName,
      password,
      errorPassword
    } = this.state;

    return (
      <div className="app-container">
        {!logged ? (
          <form className="form">
            <h1>Введите свои данные, агент</h1>
            <FormInput
              title="Имя"
              name="firstname"
              value={name}
              onChange={this.submitName}
              errorName={errorName}
              classError="field__error field-error t-error-firstname"
              classInput="field__input field-input t-input-firstname"
              type="text"
            />

            <FormInput
              title="Фамилия"
              name="lastname"
              value={lastName}
              onChange={this.submitName}
              errorName={errorLastName}
              classError="field__error field-error t-error-lastname"
              classInput="field__input field-input t-input-lastname"
              type="text"
            />

            <FormInput
              title="Пароль"
              name="password"
              value={password}
              onChange={this.submitName}
              errorName={errorPassword}
              classError="field__error field-error t-error-password"
              classInput="field__input field-input t-input-lastname"
              type="password"
            />

            <div className="form__buttons">
              <input
                type="submit"
                onClick={this.onSubmit}
                className="button t-submit"
                value="Проверить"
              />
            </div>
          </form>
        ) : (
          <img src={bond} className="t-bond-image" alt="bond approve" />
        )}
      </div>
    );
  }
}
