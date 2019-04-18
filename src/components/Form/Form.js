import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      password: '',
      isSubmit: false,
      inputValue: '',
      error: {
        firstname: '',
        lastname: '',
        password: ''
      }
    };
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
      [event.target.name]: event.target.value, //event.target.name - детектид имеено тот input на котором сработало данное событие и если имя атрибута совподает с именем в state, тогда записывает в данный стейт value данного input
      isSubmit: false,
      error: {
        firstname: '',
        lastname: '',
        password: ''
      }
    });
  };     

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isSubmit: true
    });

    if (!this.state.inputValue) {
      this.setState({
        error: {
          firstname: 'Нужно указать имя',
          lastname: 'Нужно указать фамилию',
          password: 'Нужно указать пароль'
        }
      });
    }
  };

  render() {
    return (
      <div className="app-container">
        <form className="form">
          <h1>Введите свои данные агент</h1>
          <p className="field">
            <label className="field__label" for="firstname">
              Имя
            </label>
            <input
              className="field__input field-input t-input-firstname"
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
            />
            <span className="field__error field-error t-error-firstname">{this.state.error.firstname}</span>
          </p>
          <p className="field">
            <label className="field__label" for="lastname">
              Фамилия
            </label>
            <input
              className="field__input field-input t-input-lastname"
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
            />
            <span className="field__error field-error t-error-lastname">{this.state.error.lastname}</span>
          </p>
          <p className="field">
            <label className="field__label" for="password">
              Пароль
            </label>
            <input
              className="field__input field-input t-input-password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <span className="field__error field-error t-error-password">{this.state.error.password}</span>
          </p>
          <div className="form__buttons">
            <input
              type="submit"
              className="button t-submit"
              value="Проверить"
              onClick={this.handleSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}
   
export default Form;
