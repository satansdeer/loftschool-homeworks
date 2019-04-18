import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ValidatorForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  getValue(child) {
    const name = child.props.name;
    const state = child._self.state;
    return state[name];
  }

  isFieldValid(child) {
    let isValid = true;

    const value = this.getValue(child);
    const validation = child.props.validation;
    if (!validation) return true;

    validation.forEach(rule => {
      isValid &= rule.isValueValid(value);
    });

    return isValid;
  }

  recursiveMap = (children, fn) => {
    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child;
      }

      if (child.props.children) {
        child = React.cloneElement(child, {
          children: this.recursiveMap(child.props.children, fn)
        });
      }

      return fn(child);
    });
  };

  isFormValid = () => {
    let isValid = true;

    this.recursiveMap(this.props.children, child => {
      if (child.type.name !== 'Input') return;
      isValid &= this.isFieldValid(child);
    });

    return Boolean(isValid);
  };

  render() {
    const { onSubmit, ...rest } = this.props;
    return (
      <form {...rest} onSubmit={event => onSubmit(event, this)}>
        {this.props.children}
      </form>
    );
  }
}
