import React from 'react';
import './Form.css';
import img from './assets/bond_approve.jpg';

class Form extends React.Component {
  state = {
    firstnameInput: '',
    lastnameInput: '',
    passwordInput: '',
    isValid: false,
    errors: {
      firstname: '',
      lastname: '',
      password: ''
    }
  };

  isValid = false;

  errors = {
    firstname: '',
    lastname: '',
    password: ''
  };

  changeInput = e => {
    let inputName = e.target.name + 'Input';
    let obj = {};
    obj[inputName] = e.target.value;
    obj.errors = {
      firstname: '',
      lastname: '',
      password: ''
    };

    this.setState(obj);
  };

  checkFirstName = firstName => {
    if (firstName === '') {
      this.errors.firstname = 'Нужно указать имя';
    } else if (firstName !== '' && firstName !== 'james') {
      this.errors.firstname = 'Имя указано не верно';
    } else if (firstName === 'James') {
      this.errors.firstname = '';
    }
  };

  checkLastName = lastName => {
    if (lastName === '') {
      this.errors.lastname = 'Нужно указать фамилию';
    } else if (lastName !== '' && lastName !== 'bond') {
      this.errors.lastname = 'Фамилия указана не верно';
    } else if (lastName === 'Bond') {
      this.errors.lastname = '';
    }
  };

  checkPassword = password => {
    if (password === '') {
      this.errors.password = 'Нужно указать пароль';
    } else if (password !== '' && password !== '007') {
      this.errors.password = 'Пароль указан не верно';
    } else if (password === '007') {
      this.errors.password = '';
    }
  };

  checkValue = (firstName, lastName, password) => {
    this.checkFirstName(firstName);
    this.checkLastName(lastName);
    this.checkPassword(password);

    if (
      !this.errors.firstname &&
      !this.errors.lastname &&
      !this.errors.password
    ) {
      return true;
    }

    return false;
  };

  handleSubmit = e => {
    e.preventDefault();

    const firstName = e.target.firstname.value;
    const lastName = e.target.lastname.value;
    const password = e.target.password.value;

    if (this.checkValue(firstName, lastName, password)) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }

    this.setState({
      isValid: this.isValid,
      errors: {
        firstname: this.errors.firstname,
        lastname: this.errors.lastname,
        password: this.errors.password
      }
    });
  };

  render() {
    if (this.state.isValid) {
      return (
        <div className="app-container">
          <img className="t-bond-image" src={img} alt="bond approve" />
        </div>
      );
    }

    return (
      <div className="app-container">
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
              onChange={this.changeInput}
              value={this.state.firstnameInput}
            />
            <span className="field__error field-error t-error-firstname">
              {this.state.errors.firstname}
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
              onChange={this.changeInput}
              value={this.state.lastnameInput}
            />
            <span className="field__error field-error t-error-lastname">
              {this.state.errors.lastname}
            </span>
          </p>
          <p className="field">
            <label className="field__label" htmlFor="password">
              <span className="field-label">Пароль</span>
            </label>
            <input
              className="field__input field-input t-input-password"
              type="text"
              name="password"
              onChange={this.changeInput}
              value={this.state.passwordInput}
            />
            <span className="field__error field-error t-error-password">
              {this.state.errors.password}
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
      </div>
    );
  }
}

export default Form;
