import React from 'react';
import Field from '../Field';
import Button from '../Button';
import './Form.css';

const Form = props => {
  console.log('props', props);
  const { handleValidate, changeNameField } = props;
  return (
    <form className="form" onSubmit={handleValidate}>
      <h1>Введите свои данные, агент</h1>
      <Field
        type="text"
        classname="field__input field-input t-input-firstname"
        error="error"
        label="label"
        name="name"
        handleChange={changeNameField}
      />
      <Field
        type="text"
        classname="field__input field-input t-input-lastname"
        error="error"
        label="label"
        name="lastname"
      />
      <Field
        type="password"
        classname="field__input field-input t-input-password"
        error="error"
        label="label"
        name="password"
      />
      <div className="form__buttons">
        <Button text="Проверить" />
      </div>
    </form>
  );
};

export default Form;
