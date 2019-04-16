import React from 'react';

const FieldLabel = ({ name, label }) => (
  <label className="field__label" htmlFor={name}>
    <span className="field-label">{label}</span>
  </label>
);

export default FieldLabel;
