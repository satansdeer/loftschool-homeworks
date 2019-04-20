import React, { Component } from 'react';
// import InputField from '../InputField';
import './Form.css';
import imgBond from './assets/bond_approve.jpg';

export default class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    password: '',
    isValid: false,
    errorFirstName: '',
    errorLastName: '',
    errorPassword: ''
  };

  onChangeInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      errorFirstName: '',
      errorLastName: '',
      errorPassword: ''
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.isValid();
  };
  validFirstName = () => {
    const { firstName } = this.state;
    let message = '';
    if (firstName === '') {
      message = 'Нужно указать имя';
    } else if (firstName !== 'james') {
      message = 'Имя указано не верно';
    }
    this.setState({
      errorFirstName: message
    });
  };
  validLastName = () => {
    const { lastName } = this.state;
    let message = '';
    if (lastName === '') {
      message = 'Нужно указать фамилию';
    } else if (lastName !== 'bond') {
      message = 'Фамилия указана не верно';
    }
    this.setState({
      errorLastName: message
    });
  };
  validPassword = () => {
    const { password } = this.state;
    let message = '';
    if (password === '') {
      message = 'Нужно указать пароль';
    } else if (password !== '007') {
      message = 'Пароль указан не верно';
    }
    this.setState({
      errorPassword: message
    });
  };
  isValid = () => {
    const { firstName, lastName, password } = this.state;

    if (firstName === 'james' && lastName === 'bond' && password === '007') {
      this.setState({ isValid: true });
    } else {
      this.validFirstName();
      this.validLastName();
      this.validPassword();
    }
  };

  render() {
    const {
      firstName,
      lastName,
      password,
      isValid,
      errorFirstName,
      errorLastName,
      errorPassword
    } = this.state;

    return (
      <div className="app-container">
        {isValid ? (
          <img src={imgBond} alt="bond approve" className="t-bond-image" />
        ) : (
          <form className="form" onSubmit={this.onSubmit}>
            <h1>Введите свои данные, агент</h1>

            <p className="field">
              <label htmlFor="firstName" className="field__label">
                <span className="field-label">Имя</span>
              </label>
              <input
                onChange={this.onChangeInput}
                type="text"
                value={firstName}
                name="firstName"
                className="field__input field-input t-input-firstname"
              />
              <span className="field__error field-error t-error-firstname">
                {errorFirstName}
              </span>
            </p>

            <p className="field">
              <label htmlFor="lastName" className="field__label">
                <span className="field-label">Фамилия</span>
              </label>
              <input
                onChange={this.onChangeInput}
                type="text"
                value={lastName}
                name="lastName"
                className="field__input field-input t-input-lastname"
              />
              <span className="field__error field-error t-error-lastname">
                {errorLastName}
              </span>
            </p>

            <p className="field">
              <label htmlFor="password" className="field__label">
                <span className="field-label">Пароль</span>
              </label>
              <input
                onChange={this.onChangeInput}
                type="password"
                value={password}
                name="password"
                className="field__input field-input t-input-password"
              />
              <span className="field__error field-error t-error-password">
                {errorPassword}
              </span>
            </p>

            <div className="form__buttons">
              <input
                type="submit"
                className="button t-submit"
                value="Проверить"
              />
            </div>
          </form>
        )}
      </div>
    );
  }
}
