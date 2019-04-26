import React, { Component } from 'react';
// import Img from './assets/bond_approve.jbg';
// const { Provider, Consumer } = React.createContext();

class Form extends Component {
  state = {
    name: false,
    last: false,
    pass: false,
    auth: false,
    nameErr: true,
    lastErr: true,
    passErr: true
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
      <form onSubmit={this.handleSubmit}>
        <lable>
          First name:
          <input type="text" value={this.state.name} />
        </lable>
        <lable>
          Last name:
          <input type="text" value={this.state.last} />
        </lable>
        <lable>
          Password:
          <input type="text" value={this.state.pass} />
        </lable>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
 export default