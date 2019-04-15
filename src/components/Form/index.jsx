import React from 'react';
import Field from '../Field';
import Button from '../Button';
import './Form.css';

const Form = props => {
  console.log('props', props);
  const { handleValidate, changeField, fields, stateOfFields } = props;
  return (
    <form className="form" onSubmit={handleValidate}>
      <h1>Введите свои данные, агент</h1>
      {fields.map(({name, error, value, type, nameLabel})=>{
        return (
          <Field
          type={type}
          classname={`field__input field-input t-input-${name}`}
          error={stateOfFields[name].error ? stateOfFields[name].error : ''}
          label={nameLabel}
          name={name}
          handleChange={changeField}
          key={name}
          value={stateOfFields[name].value}
        /> 
        )
      })}
      <div className="form__buttons">
        <Button text="Проверить" />
      </div>
    </form>
  );
};

export default Form;
