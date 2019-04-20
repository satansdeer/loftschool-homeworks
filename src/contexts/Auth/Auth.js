import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

const userData = {
  email: 'stu@dent.com',
  password: '123'
};

class AuthProvider extends PureComponent {
  state = {
    email: '',
    password: '',
    isAuthorized: false,
    authorizeError: ''
  };

  authorize = (email, password) => {
    userData.email === email && userData.password === password
      ? this.setState({
          email: email,
          isAuthorized: true,
          authorizeError: ''
        })
      : this.setState({ authorizeError: 'Email или пароль введён не верно' });
  };

  logout = () => {
    this.setState({ isAuthorized: false });
  };

  getProviderValue = () => {
    return {
      ...this.state,
      authorize: this.authorize,
      logout: this.logout
    };
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
