import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const { className, children, ...rest } = this.props;
    return (
      <button {...rest} className={`${className} button`}>
        {children}
      </button>
    );
  }
}

export default Button;
