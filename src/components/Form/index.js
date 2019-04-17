import React from 'react';
import './Form.css';

const Warning = ({ valid, text, classes }) => (
  <span className={classes}>{!valid && text}</span>
);

class Form extends React.Component {
  state = {
    isFirstnameValid: true,
    isLastnameValid: true,
    isPasswordValid: true,
    showPicture: false
  };

  handleClick = e => {
    e.preventDefault();
    const form = e.target;
    let isFirstnameValid = form.firstname.value.toLowerCase() === 'james';
    let isLastnameValid = form.lastname.value.toLowerCase() === 'bond';
    let isPasswordValid = form.password.value === '007';
    let showPicture = false;
    if (
      [isFirstnameValid, isLastnameValid, isPasswordValid].every(item => !!item)
    )
      showPicture = true;
    this.setState({
      isFirstnameValid: isFirstnameValid,
      isLastnameValid: isLastnameValid,
      isPasswordValid: isPasswordValid,
      showPicture: showPicture
    });
  };

  render() {
    return (
      <main className="app-container">
        {!this.state.showPicture && (
          <form className="form" onSubmit={this.handleClick}>
            <h1>Введите свои данные, агент</h1>
            <p className="field">
              <label className="field__label" htmlFor="firstname">
                <span className="field-label">Имя</span>
              </label>
              <input
                name="firstname"
                className="field-input"
                autoComplete="off"
              />
              <Warning
                classes="field-error field__error t-error-firstname"
                text="Имя указано не верно"
                valid={this.state.isFirstnameValid}
              />
            </p>
            <p className="field">
              <label className="field__label" htmlFor="lastname">
                <span className="field-label">Фамилия</span>
              </label>
              <input
                name="lastname"
                className="field-input"
                autoComplete="off"
              />
              <Warning
                classes="field-error field__error t-error-lastname"
                text="Фамилия указана не верно"
                valid={this.state.isLastnameValid}
              />
            </p>
            <p className="field">
              <label className="field__label" htmlFor="password">
                <span className="field-label">Пароль</span>
              </label>
              <input
                name="password"
                className="field-input"
                type="password"
                autoComplete="off"
              />
              <Warning
                classes="field-error field__error t-error-password"
                text="Пароль указан не верно"
                valid={this.state.isPasswordValid}
              />
            </p>
            <div className="form__button">
              <input className="button t-submit" type="submit" />
            </div>
          </form>
        )}
        {this.state.showPicture && (
          <img
            alt="James Bond"
            src="../src/components/Form/assets/bond_approve.jpg"
            className="t-bond-image"
          />
        )}
      </main>
    );
  }
}

export default Form;
