import React, { Component } from 'react';
import bond from './assets/bond_approve.jpg';
import './Form.css';

export default class Form extends Component {
  state = {
    firstname: '',
    lastname: '',
    password: '',
    firstnameError: '',
    lastnameError: '',
    passwordError: '',
    isLoggedIn: false
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      firstnameError: '',
      lastnameError: '',
      passwordError: ''
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.validate();
  };

  checkFirstname = () => {
    if (!this.state.firstname) {
      this.setState({
        firstnameError: 'Нужно указать имя',
        isLoggedIn: false
      });
    } else if (this.state.firstname !== 'James') {
      this.setState({
        firstnameError: 'Имя указано не верно',
        isLoggedIn: false
      });
    } else {
      this.setState({ firstnameError: '', isLoggedIn: true });
    }
  };

  checkLastname = () => {
    if (!this.state.lastname) {
      this.setState({
        lastnameError: 'Нужно указать фамилию',
        isLoggedIn: false
      });
    } else if (this.state.lastname !== 'Bond') {
      this.setState({
        lastnameError: 'Фамилия указана не верно',
        isLoggedIn: false
      });
    } else {
      this.setState({ lastnameError: '', isLoggedIn: true });
    }
  };

  checkPassword = () => {
    if (!this.state.password) {
      this.setState({
        passwordError: 'Нужно указать пароль',
        isLoggedIn: false
      });
    } else if (this.state.password !== '007') {
      this.setState({
        passwordError: 'Пароль указан не верно',
        isLoggedIn: false
      });
    } else {
      this.setState({ passwordError: '', isLoggedIn: true });
    }
  };

  validate = () => {
    this.checkFirstname();
    this.checkLastname();
    this.checkPassword();
  };

  render() {
    const {
      firstname,
      lastname,
      password,
      firstnameError,
      lastnameError,
      passwordError,
      isLoggedIn
    } = this.state;

    return (
      <div className="app-container">
        {isLoggedIn ? (
          <img src={bond} alt="bond approve" className="t-bond-image" />
        ) : (
          <form className="form" onSubmit={this.onSubmit}>
            <h1>Введите свои данные, агент</h1>
            <p className="field">
              <label className="field__label" htmlFor="firstname">
                <span className="field-label">Имя</span>
              </label>
              <input
                className="field__input field-input t-input-firstname"
                type="text"
                name="firstname"
                value={firstname}
                onChange={this.handleChange}
              />
              <span className="field__error field-error t-error-firstname">
                {firstnameError}
              </span>
            </p>

            <p className="field">
              <label className="field__label" htmlFor="lastname">
                <span className="field-label">Фамилия</span>
              </label>
              <input
                className="field__input field-input t-input-lastname"
                type="text"
                name="lastname"
                value={lastname}
                onChange={this.handleChange}
              />
              <span className="field__error field-error t-error-lastname">
                {lastnameError}
              </span>
            </p>

            <p className="field">
              <label className="field__label" htmlFor="password">
                <span className="field-label">Пароль</span>
              </label>
              <input
                className="field__input field-input t-input-password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              <span className="field__error field-error t-error-password">
                {passwordError}
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
