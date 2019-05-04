import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext();

class AuthProvider extends PureComponent {
  state = {
    isAuthorized: false,
    authorizeError: '',
    email: '',
    authorize: this.authorize.bind(this),
    logout: this.logout.bind(this)
  };

  authorize(email, password) {
    if (email === 'stu@dent.com' && password === '123') {
      this.setState({
        isAuthorized: true,
        authorizeError: '',
        email: email
      });
    } else {
      this.setState({
        isAuthorized: false,
        authorizeError: 'Email или пароль введён не верно',
        email: ''
      });
    }
  }

  getProviderValue() {
    return this.state;
  }

  logout() {
    this.setState({
      isAuthorized: false,
      authorizeError: '',
      email: ''
    });
  }

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
