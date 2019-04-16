import React from 'react';
import Field from '../Field';
import bond_approve from './assets/bond_approve.jpg';
import './Form.css';

class Form extends React.Component {
  state = {
    form: {
      firstname: '',
      lastname: '',
      password: ''
    },
    codeError: {
      firstname: undefined,
      lastname: undefined,
      password: undefined
    },

    success: false
  };

  /**
   * Изменение поля на форме
   */
  onChangeForm = (field, value) => {
    let form = { ...this.state.form };
    form[field] = value;
    this.setState({ form, codeError: this.getСleanCodeError() });
  };

  /**
   * Очищенный объект с кодами ошибок
   */
  getСleanCodeError = () => {
    let codeError = { ...this.state.codeError };
    Object.keys(codeError).forEach(index => (codeError[index] = undefined));
    return codeError;
  };

  onSubmitForm = event => {
    event.preventDefault();
    this.vaidateForm().then(result => {
      this.setState({ success: !this.hasErrors() });
    });
  };

  /**
   * Валидация формы
   */
  vaidateForm = () => {
    const { form } = this.state;
    let codeError = this.getСleanCodeError();

    return this._vaidateFormRequired(form, codeError)
      .then(result => {
        return this._vaidateFormData(form, codeError);
      })
      .then(reult => {
        this.setState({ codeError });
      });
  };

  /**
   * Валидация на обязательные заполненные поля
   */
  _vaidateFormRequired = (form, codeError) => {
    return new Promise(resolve => {
      for (let field in form) {
        if (!form[field]) {
          codeError[field] = 'required';
        }
      }
      resolve();
    });
  };

  /**
   * Валидация данных
   */
  _vaidateFormData = (form, codeError) => {
    return new Promise(resolve => {
      let validData = {
        firstname: 'james',
        lastname: 'bond',
        password: '007'
      };

      for (let field in validData) {
        if (!codeError[field] && validData[field] !== form[field].toLowerCase()) {
          codeError[field] = 'data';
        }
      }

      resolve();
    });
  };

  /**
   * Проверка наличия ошибок
   */
  hasErrors = () => {
    const codeError = this.state.codeError;

    for (let field in codeError) {
      if (codeError[field]) {
        return true;
      }
    }

    return false;
  };

  render() {
    const { form, codeError, success } = this.state;

    if (success) {
      return (
        <div className="app-container">
          <img src={bond_approve} alt="bond approve" class="t-bond-image" />
        </div>
      );
    }

    return (
      <div className="app-container">
        <form onSubmit={this.onSubmitForm}>
          <h1>Введите свои данные</h1>

          <Field
            label="Имя"
            name="firstname"
            value={form.firstname}
            error={codeError.firstname}
            onChange={this.onChangeForm}
            errorRequired="Нужно указать имя"
            errorData="Имя указано не верно"
          />

          <Field
            label="Фамилия"
            name="lastname"
            value={form.lastname}
            error={codeError.lastname}
            onChange={this.onChangeForm}
            errorRequired="Нужно указать фамилию"
            errorData="Фамилия указана не верно"
          />

          <Field
            label="Пароль"
            name="password"
            value={form.password}
            error={codeError.password}
            type="password"
            onChange={this.onChangeForm}
            errorRequired="Нужно указать пароль"
            errorData="Пароль указан не верно"
          />

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
