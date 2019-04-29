import React, { Component } from 'react';
import './Form.css';
// import bond from './assets/bond_approve.jbg';
// const { Provider, Consumer } = React.createContext();

class Form extends Component {
  state = {
    first: '',
    last: '',
    pass: '',
    auth: false,
    nameErr: 0,
    lastErr: 0,
    passErr: 0
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { first, last, pass } = this.state;

    if (first === '') {
      this.setState({ nameErr: 0 });
    } else if (first === 'james') {
      this.setState({ nameErr: 1 });
    } else {
      this.setState({ nameErr: 2 });
    }

    if (last === '') {
      this.setState({ lastErr: 0 });
    } else if (last === 'bond') {
      this.setState({ lastErr: 1 });
    } else {
      this.setState({ lastErr: 2 });
    }
  };

  render() {
    return (
      <div className="app-container">
        <h3 className="field">Введите свои данные агент:</h3>
        <form className="form__buttons" onSubmit={this.onSubmit}>
          <lable className="field__label,field-label">First name:</lable>
          <input
            onChange={this.onChange}
            className="field-input"
            type="text"
            value={this.state.first}
            name="first"
          />

          <lable className="field__label,field-label">Last name:</lable>
          <input
            name="last"
            className="field-input"
            type="text"
            value={this.state.last}
          />

          <lable className="field__label,field-label">Password:</lable>
          <input
            name="pass"
            className="field-input"
            type="text"
            value={this.state.pass}
          />

          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Form;
