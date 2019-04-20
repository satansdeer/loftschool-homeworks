import React, { memo } from 'react';
import './Button.css';

const Button = memo(({ additionalClassName, text, handleClick }) => {
  return (
    <button className={`${additionalClassName} button`} onClick={handleClick}>
      {text}
    </button>
  );
});

export default Button;
