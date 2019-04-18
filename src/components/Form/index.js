import React from 'react';
import './Form.css';
const FormData = {
  firstname: {
    value: 'james',
    error: 'Имя указано не верно',
    errorEmpty: 'Нужно указать имя'
  },
  lastname: {
    value: 'bond',
    error: 'Фамилия указана не верно',
    errorEmpty: 'Нужно указать фамилию'
  },
  password: {
    value: '007',
    error: 'Пароль указан не верно',
    errorEmpty: 'Нужно указать пароль'
  }
};

class Form extends React.Component {
  state = {
    errors: {},
    isValidate: false,
    values: { firstname: ``, lastname: ``, password: `` }
  };

  handleChange = e => {
    const currentInput = e.target;
    this.setState({
      values: { ...this.state.values, [currentInput.name]: currentInput.value },
      errors: {}
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let errors = {};
    const form = e.target;
    const [firstname, lastname, password] = form;
    [firstname, lastname, password].forEach(item => {
      const name = item.name;
      const value = item.value;
      if (!value) {
        errors[name] = FormData[name]['errorEmpty'];
        return;
      }
      if (value.toLowerCase() !== FormData[name]['value']) {
        errors[name] = FormData[name]['error'];
      }
    });

    this.setState({
      errors: errors,
      isValidate: Object.keys(errors).length === 0
    });
  };

  render() {
    const { errors } = this.state;
    return (
      <main className="app-container">
        {!this.state.isValidate && (
          <form className="form" onSubmit={this.handleSubmit}>
            <h1>Введите свои данные, агент</h1>
            <p className="field">
              <label className="field__label" htmlFor="firstname">
                <span className="field-label">Имя</span>
              </label>
              <input
                name="firstname"
                className="field-input t-input-firstname"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <span className="field-error field__error t-error-firstname">
                {errors['firstname']}
              </span>
            </p>
            <p className="field">
              <label className="field__label" htmlFor="lastname">
                <span className="field-label">Фамилия</span>
              </label>
              <input
                name="lastname"
                className="field-input t-input-lastname"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <span className="field-error field__error t-error-lastname">
                {errors['lastname']}
              </span>
            </p>
            <p className="field">
              <label className="field__label" htmlFor="password">
                <span className="field-label">Пароль</span>
              </label>
              <input
                name="password"
                type="password"
                className="field-input t-input-password"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <span className="field-error field__error t-error-password">
                {errors['password']}
              </span>
            </p>
            <div className="form__button">
              <input className="button t-submit" type="submit" />
            </div>
          </form>
        )}
        {this.state.isValidate && (
          <img
            alt="James Bond"
            src="../src/components/Form/assets/bond_approve.jpg"
            className="t-bond-image"
          />
        )}
      </main>
    );
  }
}

export default Form;
