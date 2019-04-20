import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      password: '',

      touched: {
        firstname: false,
        lastname: false,
        password: false
      }
    };
  }

  render() {
    return (
      <div className="app-container">
        <form className="form">
          <h1>Введите свои данные, агент</h1>

          <p className="field">
            <label className="field__label" htmlFor="firstname">
              <span className="feild-label">Имя</span>
            </label>
            <input
              type="text"
              className="field__input field-input t-input-firstname"
              name="firstname"
            />
            <span className="field__error field-error t-error-firstname" />
          </p>

          <p className="field">
            <label htmlFor="lastname" className="field__label">
              <span className="feild-label">Фамилия</span>
            </label>
            <input
              type="text"
              className="field__input field-input t-input-lastname"
              name="lastname"
            />
            <span className="field__error field-error t-error-lastname" />
          </p>

          <p className="field">
            <label htmlFor="password" className="field__label">
              <span className="feild-label">Пароль</span>
            </label>
            <input
              type="text"
              className="field__input field-input t-input-password"
              name="password"
            />
            <span className="field__error field-error t-error-firstname" />
          </p>
        </form>
      </div>
    );
  }
}

export default Form;
