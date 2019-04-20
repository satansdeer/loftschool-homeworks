import React from 'react';

const FormInput = ({
  name,
  title,
  classInput,
  value,
  onChange,
  type,
  classError,
  errorName
}) => {
  return (
    <p className="field">
      <label className="field__label" htmlFor={name}>
        <span className="field-label">{title}</span>
      </label>
      <input
        name={name}
        className={classInput}
        value={value}
        onChange={onChange}
        type={type}
      />
      <span className={classError}>{errorName}</span>
    </p>
  );
};

export default FormInput;
