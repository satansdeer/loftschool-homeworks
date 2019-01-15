import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import propTypes from "prop-types";
import classes from "./LoginForm.module.css";
import classNames from "classnames";
import Input from "../Input";
import { withAuth } from "../../context/Auth";
import dataInputs from "../Input/dataInputs";

const initialState = () => {
  return {
    value: ""
  };
};

class LoginForm extends Component {
  state = {
    formControls: {
      email: initialState(),
      password: initialState()
    }
  };

  static get propTypes() {
    return {
      isAuthorized: propTypes.bool,
      authError: propTypes.string,
      authorize: propTypes.func.isRequired
    };
  }

  static get defaultProps() {
    return {
      authError: "Данные введены неверно"
    };
  }

  changeState = state => this.setState({ ...state });

  onChange = evt => {
    const { name, value } = evt.target;
    const formControls = { ...this.state.formControls };
    const control = formControls[name];
    control.value = value;
    formControls[name] = control;
    this.changeState({ formControls });
  };

  onClickButton = () => {
    const { email, password } = this.state.formControls;
    this.props.authorize(email.value, password.value);
  };


  renderInputs = () => {
    return Object.keys(this.state.formControls).map((collName, idx) => {
      const control = this.state.formControls[collName];
      return (
        <Input
          key={collName + idx}
          value={control.value}
          onChange={this.onChange}
          className={classNames(classes.input, `t-input-${collName}`)}
          labelClassName={classes.labelText}
          {...dataInputs[collName]}
        />
      );
    });
  };

  render() {
    const { isAuthorized, authError } = this.props;
    return (
      <div className={classes.bg}>
        <div className={classNames(classes.form, "t-form")}>
          {this.renderInputs()}
          <p className={classes.error}>{authError}</p>
          <div className={classes.buttons}>
            <button
              type='button'
              className={classNames(classes.button, "t-login")}
              onClick={this.onClickButton}
            >
              Войти
            </button>
          </div>
        </div>
        {isAuthorized && <Redirect to={"/app"}/>}
      </div>
    );
  }
}

export default withAuth(LoginForm);