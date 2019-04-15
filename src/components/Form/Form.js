import React, { useState } from 'react';
import bond from './assets/bond_approve.jpg';
import './Form.css';

const Form = () => {
  const [fieldsProps, setFieldsProps] = useState({
    values: {
      firstname: '',
      lastname: '',
      password: ''
    },

    errors: {
      firstname: '',
      lastname: '',
      password: ''
    }
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const { values, errors } = fieldsProps;

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleChange = e => {
    const cleanErrors = Object.keys(errors).reduce((obj, key) => {
      obj[key] = '';
      return obj;
    }, {});

    const { name, value } = e.target;
    setFieldsProps(fieldsProps => ({
      ...fieldsProps,
      errors: { ...cleanErrors },
      values: { ...fieldsProps.values, [name]: value }
    }));
  };

  const validate = () => {
    let isError = true;

    let firstname = '';
    let lastname = '';
    let password = '';

    if (!values.firstname) {
      isError = false;
      firstname = 'Нужно указать имя';
    }

    if (values.firstname && values.firstname !== 'james') {
      isError = false;
      firstname = 'Имя указано не верно';
    }

    if (!values.lastname) {
      isError = false;
      lastname = 'Нужно указать фамилию';
    }

    if (values.lastname && values.lastname !== 'bond') {
      isError = false;
      lastname = 'Фамилия указана не верно';
    }

    if (!values.password) {
      isError = false;
      password = 'Нужно указать пароль';
    }

    if (values.password && values.password !== '007') {
      isError = false;
      password = 'Пароль указан не верно';
    }

    setFieldsProps(fieldsProps => ({
      ...fieldsProps,
      errors: { firstname: firstname, lastname: lastname, password: password }
    }));

    return isError;
  };

  return (
    <div className="app-container">
      {isSubmitted ? (
        <img src={bond} alt="bond approve" className="t-bond-image" />
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <h1>Введите свои данные, агент</h1>
          <p className="field">
            <label className="field__label" htmlFor="firstname">
              <span className="field-label">Имя</span>
            </label>
            <input
              className="field__input field-input t-input-firstname"
              type="text"
              name="firstname"
              value={values.firstname}
              onChange={handleChange}
            />
            <span className="field__error field-error t-error-firstname">
              {errors.firstname}
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
              value={values.lastname}
              onChange={handleChange}
            />
            <span className="field__error field-error t-error-lastname">
              {errors.lastname}
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
              value={values.password}
              onChange={handleChange}
            />
            <span className="field__error field-error t-error-password">
              {errors.password}
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
};

export default Form;
