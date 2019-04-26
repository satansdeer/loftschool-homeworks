import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  validEmail = 'stu@dent.com';
  validPassword = '123';
  state = {
    email: '',
    authorizeError: '',
    isAuthorized: false
  };

  authorize = (email, password) => {
    if (this.validEmail !== email || this.validPassword !== password)
      this.setState({ authorizeError: 'Email или пароль введён не верно' });
    else this.setState({ email, isAuthorized: true, authorizeError: '' });
  };

  logout = () => {
    this.setState({ email: '', isAuthorized: false });
  };

  getProviderValue = () => {
    const { email, isAuthorized, authorizeError } = this.state;
    return {
      email,
      isAuthorized,
      authorizeError,
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
