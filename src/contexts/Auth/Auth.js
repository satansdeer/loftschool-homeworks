import React, { Component } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends Component {
  state = {
    email: '',
    authorizeError: '',
    isAuthorized: false
  };

  authorize = (email, password) => {
    if (email === 'stu@dent.com' && password === '123') {
      this.setState({ email, isAuthorized: true, authorizeError: '' });
    } else {
      this.setState({
        isAuthorized: false,
        authorizeError: 'Email или пароль введён не верно'
      });
    }
  };

  logout = () => {
    this.setState({
      email: '',
      isAuthorized: false,
      authorizeError: ''
    });
  };

  getProviderValue = () => {
    return { authorize: this.authorize, logout: this.logout, ...this.state };
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
