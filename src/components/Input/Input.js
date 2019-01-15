import React from "react";
import propTypes from "prop-types";

const Input = props => {
  const { name, label, value, type, onChange, labelClassName, className } = props;
  const htmlFor = `${name}-${Math.round(Math.random() * Date.now())}`;
  return (
    <p>
      <label htmlFor={htmlFor}>
        <span className={labelClassName}>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        className={className}
        value={value}
        id={htmlFor}
        onChange={onChange}
      />
    </p>
  );
};

Input.defaultProps = {
  value: "",
  type: "text"
};

Input.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  type: propTypes.string,
  value: propTypes.string,
  className: propTypes.string,
  labelClassName: propTypes.string,
  valid: propTypes.bool,
  onChange: propTypes.func.isRequired
};

export default Input;