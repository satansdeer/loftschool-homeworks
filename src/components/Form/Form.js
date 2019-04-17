import React, { Component } from 'react';
import InputField from '../InputField';
import './Form.css';

export default class Form extends Component {
  render() {
    return (
      <div className="app-container">
        <form className="form">
          <h1>Введите свои данные, агент</h1>
          <InputField />
          <InputField />
          <InputField />
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
