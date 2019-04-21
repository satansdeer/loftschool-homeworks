import React from 'react';

const FieldLabel = ({ name, label }) => {
  return (
    <label className="field__label" htmlFor={name}>
      <span className="feild-label">{label}</span>
    </label>
  );
};

export default FieldLabel;
