import React from 'react';
import './Form.css';
import bondImage from './assets/bond_approve.jpg';

const data = {
  firstName: 'james',
  lastName: 'bond',
  password: '007',
  errors: {
    firstName: 'Имя указано не верно',
    lastName: 'Фамилия указана не верно',
    password: 'Пароль указан не верно',
    firstNameEmpty: 'Нужно указать имя',
    lastNameEmpty: 'Нужно указать фамилию',
    passwordEmpty: 'Нужно указать пароль'
  }
};

class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    password: '',
    isShowForm: true,
    firstNameError: '',
    lastNameError: '',
    passwordError: ''
  };
  handleSubmit = event => {
    event.preventDefault();
    this.handleValid();
  };
  handleInput = event => {
    // const { firstNameError, lastNameError, passwordError } = this.state;
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      firstNameError: '',
      lastNameError: '',
      passwordError: ''
    });
    console.log(this.state);
  };
  handleValid() {
    const {
      firstName,
      lastName,
      password,
      firstNameValid = firstName.toLowerCase() === data.firstName,
      lastNameValid = lastName.toLowerCase() === data.lastName,
      passwordValid = password.toLowerCase() === data.password
    } = this.state;
    this.setState({
      firstNameError:
        firstName.length === 0
          ? data.errors.firstNameEmpty
          : firstName !== data.firstName
          ? data.errors.firstName
          : '',
      lastNameError:
        lastName.length === 0
          ? data.errors.lastNameEmpty
          : lastName !== data.lastName
          ? data.errors.lastName
          : '',
      passwordError:
        password.length === 0
          ? data.errors.passwordEmpty
          : password !== data.password
          ? data.errors.password
          : '',
      isShowForm:
        firstNameValid && lastNameValid && passwordValid ? false : true
    });
  }

  render() {
    return this.state.isShowForm ? (
      <div className="app-container">
        <h1>Введите свои данные, агент</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="firstName" className="field__label" id="firstName">
              <span className="field-label">Имя</span>
            </label>
            <input
              type="text"
              name="firstName"
              className="field__input field-input t-input-firstname"
              onChange={this.handleInput}
              value={this.state.firstName}
            />
            <span className="field__error field-error t-error-firstname">
              {this.state.firstNameError}
            </span>
          </div>
          <div className="field">
            <label htmlFor="lastName" className="field__label" id="lastName">
              <span className="field-label">Фамилия</span>
            </label>
            <input
              type="text"
              name="lastName"
              className="field__input field-input t-input-lastname"
              onChange={this.handleInput}
              value={this.state.lastName}
            />
            <span className="field__error field-error t-error-lastname">
              {this.state.lastNameError}
            </span>
          </div>
          <div className="field">
            <label htmlFor="password" className="field__label" id="password">
              <span className="field-label">Пароль</span>
            </label>
            <input
              type="password"
              name="password"
              className="field__input field-input t-input-password"
              onChange={this.handleInput}
              value={this.state.password}
            />
            <span className="field__error field-error t-error-password">
              {this.state.passwordError}
            </span>
          </div>
          <div className="form__buttons">
            <button className="button t-submit">Проверить</button>
          </div>
        </form>
      </div>
    ) : (
      <div className="app-container">
        <div className="t-bond-image">
          <img src={bondImage} alt="bond approve" />
        </div>
      </div>
    );
  }
}

export default Form;
