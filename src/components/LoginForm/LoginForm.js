import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '../../context/Auth';
import cx from 'classnames';
import classes from './LoginForm.module.css';

const fields = [
  {
    name: 'email',
    label: 'Почта',
    type: 'text'
  },
  {
    name: 'password',
    label: 'Пароль',
    type: 'password'
  }
];
class LoginForm extends PureComponent {
  state = {
    email: '',
    password: ''
  };
  renderForm() {
    const { authError } = this.props;
    const values = this.state;
    return (
      <div className={classes.bg}>
        <div className={cx(classes.form, 't-form')}>
          {fields.map(({ name, label, type }) => (
            <p key={name} className={classes.field}>
              <label htmlFor={name} className={classes.label}>
                <span className={classes.labelText}>{label}</span>
              </label>
              <input
                type={type}
                name={name}
                className={cx(classes.input, `t-input-${name}`)}
                onChange={this.handleChange}
                value={values[name]}
              />
            </p>
          ))}
          {authError !== '' && <p className={classes.error}>{authError}</p>}
          <div className={classes.buttons}>
            <button
              className={cx(classes.button, 't-login')}
              onClick={this.handleEnter}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { isAuthorized } = this.props;
    if (isAuthorized) return <Redirect to="/app" />;
    else return this.renderForm();
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleEnter = () => {
    const { authorize } = this.props;
    const { email, password } = this.state;
    authorize(email, password);
  };
}
export default withAuth(LoginForm);
