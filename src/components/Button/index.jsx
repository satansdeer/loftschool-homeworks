import React from 'react';
import './Button.css';

const Button = ({ handleClick, text }) => (
  <button className="button t-submit" onClick={handleClick}>
    {text}
  </button>
);

export default Button;
