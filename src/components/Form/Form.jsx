import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      error: [],
      isShowForm: true
    };
  }
  handleInput = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };
  handleValid() {
    const {
      firstName,
      lastName,
      password,
      firstNameValid,
      lastNameValid,
      passwordValid
    } = this.state;
    this.setState({
      firstNameError:
        firstName.length === 0
          ? 'Нужно указать имя'
          : firstName !== 'james'
          ? 'Имя указано не верно'
          : '',
      firstNameValid: firstName === 'james',
      lastNameError:
        lastName.length === 0
          ? 'Нужно указать фамилию'
          : lastName !== 'bond'
          ? 'Фамилия указана не верно'
          : '',
      lastNameValid: lastName !== 'bond',
      passwordError:
        password.length === 0
          ? 'Нужно указать пароль'
          : password !== '007'
          ? 'Пароль указан не верно'
          : '',
      passwordValid: password !== '007',
      isShowForm:
        firstNameValid && lastNameValid && passwordValid ? false : true
    });
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handleValid();
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
          <img src="Form/assets/bond_approve.jpg" alt="bond approve" />
        </div>
      </div>
    );
  }
}

export default Form;
