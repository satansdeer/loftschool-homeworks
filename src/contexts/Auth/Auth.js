import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  authEmail = 'stu@dent.com';
  authPassword = '123';

  state = {
    email: '',
    isAuth: false,
    authError: ''
  };

  authorize = (email, password) => {
    if (this.authEmail !== email || this.authPassword !== password)
      this.setState({ authError: 'Email или пароль введены не верно' });
    else this.setState({ email, isAuth: true, authError: '' });
  };

  logout = () => {
    this.setState({ isAuth: false, email: '' });
  };

  providerValue = () => {
    const { email, isAuth, authError } = this.state;

    return {
      email,
      isAuth,
      authError,
      authorize: this.authorize,
      logout: this.logout
    };
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.providerValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
