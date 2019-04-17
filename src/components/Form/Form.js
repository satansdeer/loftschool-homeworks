import React from 'react';
import loggedInImage from './assets/bond_approve.jpg';
import './Form.css';

class Form extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    password: '',
    firstnameError: '',
    lastnameError: '',
    passwordError: '',
    isLoggedIn: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.validate();
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
      firstnameError: '',
      lastnameError: '',
      passwordError: ''
    });
  };

  validateFirstname = () => {
    const { firstname } = this.state;

    if (!firstname) {
      this.setState({
        firstnameError: 'Нужно указать имя'
      });
    } else if (firstname !== 'james') {
      this.setState({
        firstnameError: 'Имя указано не верно'
      });
    }
  };

  validateLastname = () => {
    const { lastname } = this.state;

    if (!lastname) {
      this.setState({
        lastnameError: 'Нужно указать фамилию'
      });
    } else if (lastname !== 'bond') {
      this.setState({
        lastnameError: 'Фамилия указана не верно'
      });
    }
  };

  validatePassword = () => {
    const { password } = this.state;

    if (!password) {
      this.setState({
        passwordError: 'Нужно указать пароль'
      });
    } else if (password !== '007') {
      this.setState({
        passwordError: 'Пароль указан не верно'
      });
    }
  };

  commonValidateData = () => {
    this.validateFirstname();
    this.validateLastname();
    this.validatePassword();
  };

  validate = () => {
    const { lastname, firstname, password } = this.state;

    if (firstname === 'james' && lastname === 'bond' && password === '007') {
      this.setState({ isLoggedIn: true });
    } else {
      this.commonValidateData();
    }
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
          <img src={loggedInImage} className="t-bond-image" alt="jbond" />
        ) : (
          <form className="form" onSubmit={this.handleSubmit}>
            <h1>Введите свои данные, агент</h1>
            <p className="field">
              <label className="field__label" htmlFor="firstname">
                <span className="field-label">Имя</span>
              </label>
              <input
                className="field__input field-input t-input-firstname"
                type="text"
                name="firstname"
                autoComplete="off"
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
                autoComplete="off"
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
                autoComplete="off"
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

export default Form;
