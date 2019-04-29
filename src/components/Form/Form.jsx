import React, { Component } from 'react';
import './Form.css';
// import bond from './assets/bond_approve.jbg';
// const { Provider, Consumer } = React.createContext();

class Form extends Component {
  state = {
    name: '',
    last: '',
    pass: '',
    auth: false,
    nameErr: '',
    lastErr: '',
    passErr: ''
  };

  handleSubmit = event => {
    if (event.target.name === '') {
      this.setState({ name: false });
    } else if (this.state.name === 'james') {
      this.setState({ nameErr: false });
    } else {
      this.setState({ nameErr: true });
    }

    // if (event.target.last === '') {
    //   this.setState({ last: false });
    // } else if (this.state.last === 'james') {
    //          this.setState({ lastErr: false });
    //        } else {
    //          this.setState({ lastErr: true });
    //        }

    // if (event.target.pass === '') {
    //   this.setState({ pass: false });
    // } else if (this.state.pass === 'james') {
    //          this.setState({ passErr: false });
    //        } else {
    //          this.setState({ passErr: true });
    //        }
  };

  render() {
    return (
      <div className="app-container">
        <h3 className="field">Введите свои данные агент:</h3>
        <form className="form__buttons" onSubmit={this.handleSubmit}>
          <lable className="field__label,field-label">First name:</lable>
          <input className="field-input" type="text" value={this.state.name} />

          <lable className="field__label,field-label">Last name:</lable>
          <input className="field-input" type="text" value={this.state.last} />

          <lable className="field__label,field-label">Password:</lable>
          <input className="field-input" type="text" value={this.state.pass} />

          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Form;
