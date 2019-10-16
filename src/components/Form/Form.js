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
<<<<<<< HEAD
    messageFirstname: '',
    messageLastname: '',
    messagePassword: ''
=======
    errorFirstName: '',
    errorLastName: '',
    errorPassword: ''
>>>>>>> cfd9d208b4b713acef15cbda7b67161dcfc7581e
  };

  onChangeInput = e => {
    console.log(e.target.name);
    const { name, value } = e.target;
    this.setState({
<<<<<<< HEAD
      [name]: value.toLowerCase(),
      messageFirstname: '',
      messageLastname: '',
      messagePassword: ''
=======
      [name]: value,
      errorFirstName: '',
      errorLastName: '',
      errorPassword: ''
>>>>>>> cfd9d208b4b713acef15cbda7b67161dcfc7581e
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.isValid();
  };
<<<<<<< HEAD
  onValid = e => {
    const { firstname, lastname, password } = this.state;
=======
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
>>>>>>> cfd9d208b4b713acef15cbda7b67161dcfc7581e

    if (firstName === 'james' && lastName === 'bond' && password === '007') {
      this.setState({ isValid: true });
    } else {
<<<<<<< HEAD
      this.checkFirstname(firstname);
      this.checkLastname(lastname);
      this.checkPassword(password);
    }
  };
  checkFirstname = firstname => {
    if (firstname === '') {
      this.setState({
        messageFirstname: 'Нужно указать имя'
      });
    } else if (firstname !== 'james') {
      this.setState({
        messageFirstname: 'Имя указано не верно'
      });
    } else {
      this.setState({ messageFirstname: '' });
    }
  };
  checkLastname = lastname => {
    if (lastname === '') {
      this.setState({
        messageLastname: 'Нужно указать фамилию'
      });
    } else if (lastname !== 'bond') {
      this.setState({
        messageLastname: 'Фамилия указана не верно'
      });
    } else {
      this.setState({ messageLastname: '' });
    }
  };
  checkPassword = password => {
    if (password === '') {
      this.setState({
        messagePassword: 'Нужно указать пароль'
      });
    } else if (password !== '007') {
      this.setState({
        messagePassword: 'Пароль указан не верно'
      });
    } else {
      this.setState({ messagePassword: '' });
    }
  };
  render() {
    const {
      firstname,
      lastname,
      password,
      isValid,
      messageFirstname,
      messageLastname,
      messagePassword
=======
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
>>>>>>> cfd9d208b4b713acef15cbda7b67161dcfc7581e
    } = this.state;

    return (
      <div className="app-container">
        {isValid ? (
          <img src={imgBond} alt="bond approve" className="t-bond-image" />
        ) : (
          <form className="form" onSubmit={this.onSubmit}>
            <h1>Введите свои данные</h1>

            <p className="field">
              <label htmlFor="firstName" className="field__label">
                <span className="field-label">Имя</span>
              </label>
              <input
                onChange={this.onChangeInput}
                type="text"
<<<<<<< HEAD
                value={firstname}
                name="firstname"
                className="field__input field-input t-input-firstname"
              />
              <span className="field__error field-error t-error-firstname">
                {messageFirstname}
=======
                value={firstName}
                name="firstName"
                className="field__input field-input t-input-firstname"
              />
              <span className="field__error field-error t-error-firstname">
                {errorFirstName}
>>>>>>> cfd9d208b4b713acef15cbda7b67161dcfc7581e
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
<<<<<<< HEAD
                {messageLastname}
=======
                {errorLastName}
>>>>>>> cfd9d208b4b713acef15cbda7b67161dcfc7581e
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
<<<<<<< HEAD
                {messagePassword}
=======
                {errorPassword}
>>>>>>> cfd9d208b4b713acef15cbda7b67161dcfc7581e
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
