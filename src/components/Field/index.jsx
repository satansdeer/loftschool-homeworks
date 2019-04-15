import React from 'react';
import './Field.css';

const getAutoCompleted = value =>  value === 'password' ? 'off' : 'on';

const Field = ({
  handleChange,
  type,
  label,
  error,
  value,
  classname,
  name
}) => (
  <p className="field">
    <label className="field__label" labelFor={name}>
      <span className="field-label">{label}</span>
    </label>
    <input
      className={classname}
      type={type}
      onChange={({ target: { value } }) => handleChange(name, value)}
      autoComplete={getAutoCompleted(type)}
      id={name}
      onDrop={e=>e.preventDefault()}
      onPaste={e=>e.preventDefault()}
    />
    <span className={`field__error field-error t-error-${name}`}>{error}</span>
  </p>
);

export default Field;
