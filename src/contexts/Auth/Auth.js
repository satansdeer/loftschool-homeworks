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
          password: password,
          isAuthorized: true,
          authorizeError: ''
        })
      : this.setState({ authorizeError: 'Email или пароль введён не верно' });
  };

  logout = () => {
    this.setState({ isAuthorized: false });
  };

  getProviderValue = () => {
    const { email, authorizeError, isAuthorized } = this.state;
    return {
      email: email,
      authorizeError: authorizeError,
      isAuthorized: isAuthorized,
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
