/* eslint-disable no-undef */
import React, { Component } from 'react';
import './Form.css';
import bondImage from './assets/bond_approve.jpg';

class Form extends Component {
  state = {
    showForm: true,
    inputs: [
      {
        value: '',
        key: 'firstname',
        label: 'Имя',
        error: '',
        absenceText: 'Нужно указать имя',
        wrongText: 'Имя указано не верно',
        rightValid: 'james'
      },
      {
        value: '',
        key: 'lastname',
        label: 'Фамилия',
        error: '',
        absenceText: 'Нужно указать фамилию',
        wrongText: 'Фамилия указана не верно',
        rightValid: 'bond'
      },
      {
        value: '',
        key: 'password',
        label: 'Пароль',
        error: '',
        absenceText: 'Нужно указать пароль',
        wrongText: 'Пароль указан не верно',
        rightValid: '007'
      }
    ]
  };
  handleSubmit = e => {
    e.preventDefault();
    let newInputs = this.state.inputs.slice();
    let rightCounter = 0;
    this.state.inputs.map((el, index) => {
      if (el.value.length === 0) {
        newInputs[index] = {
          ...this.state.inputs[index],
          error: el.absenceText
        };
      } else if (el.value !== el.rightValid) {
        newInputs[index] = {
          ...this.state.inputs[index],
          error: el.wrongText
        };
      } else {
        rightCounter++;
      }
      return true;
    });
    this.setState({ inputs: newInputs });
    if (rightCounter === this.state.inputs.length) {
      this.setState({ showForm: false });
    }
  };
  handleInput = e => {
    let newInputs = this.state.inputs.slice();
    this.state.inputs.map((el, index) => {
      if (el.key === e.target.name) {
        newInputs[index] = {
          ...this.state.inputs[index],
          value: e.target.value,
          error: ''
        };
      } else {
        newInputs[index] = {
          ...this.state.inputs[index],
          error: ''
        };
      }
      return true;
    });
    this.setState({ inputs: newInputs });
  };
  render() {
    if (this.state.showForm) {
      return (
        <div className="app-container">
          <form className="form" onSubmit={this.handleSubmit}>
            <h1>Введите свои данные, агент</h1>
            {this.state.inputs.map((el, index) => {
              return (
                <p key={el.key} className="field">
                  <label className="field__label">
                    <span className="field-label">{el.label}</span>
                  </label>
                  <input
                    value={this.state.inputs[index].value}
                    className={`field__input field-input t-input-${
                      this.state.inputs[index].key
                    }`}
                    type="text"
                    onChange={this.handleInput}
                    name={el.key}
                  />
                  <span
                    className={`field__error field-error t-error-${
                      this.state.inputs[index].key
                    }`}
                  >
                    {this.state.inputs[index].error}
                  </span>
                </p>
              );
            })}
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
    } else {
      return (
        <div className="app-container">
          <img src={bondImage} alt="bond approve" className="t-bond-image" />
        </div>
      );
    }
  }
}

export default Form;
