import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ValidatorRuleItem from '../Validator/ValidatiorRuleItem';
import Validator from '../Validator';

const { Provider, Consumer } = React.createContext({ value: '' });

export default class Input extends Component {
  state = {
    errors: [],
    value: ''
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,

    className: PropTypes.string,
    displayName: PropTypes.string,
    classWrapper: PropTypes.string,
    classError: PropTypes.string,
    value: PropTypes.string,

    validation: PropTypes.arrayOf(PropTypes.instanceOf(ValidatorRuleItem)),
    showErrors: PropTypes.bool
  };

  static defaultProps = {
    showErrors: false
  };

  componentDidMount() {
    this.setState({
      value: this.props.value
    });
  }

  setErrors = async errors => {
    await this.setState({
      errors: errors
    });
  };

  changeValue = (e, ctx) => {
    const {
      target: { value }
    } = e;

    this.setState({
      value: value
    });

    this.props.onChange(value, ctx);
  };

  renderErrors = () => {
    if (!this.props.showErrors) {
      return null;
    }

    const { errors } = this.state;

    return errors.length ? errors[0] : null;
  };

  render() {
    const { classError, showErrors, name, ...rest } = this.props;

    return (
      <span className={this.props.classWrapper}>
        <input
          {...rest}
          type={this.props.type}
          value={this.state.value}
          onChange={e => this.changeValue(e, this)}
          className={this.props.className}
        />
        <span className={`t-error-${name} ${classError}`}>
          {this.renderErrors()}
        </span>

        <Provider value={this.state.value}>
          <Consumer>
            {value => (
              <Validator
                rules={this.props.validation}
                setErrors={this.setErrors}
                value={value}
                classError={classError}
              />
            )}
          </Consumer>
        </Provider>
      </span>
    );
  }
}
