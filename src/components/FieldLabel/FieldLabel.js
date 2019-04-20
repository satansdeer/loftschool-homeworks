import React from 'react';

const FieldLabel = ({ ...props }) => {
  const { name, label } = props;
  //   console.log(name); // undefined // why?
  return (
    <label className="field__label" htmlFor={name}>
      <span className="feild-label">{label}</span>
    </label>
  );
};

export default FieldLabel;
