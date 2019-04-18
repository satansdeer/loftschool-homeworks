import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: '',
    authorizeError: '',
    isAuthorized: false
  };

  render() {
    const { children } = this.props;
    const { isAuthorized, authorizeError, email } = this.state;
    return (
      <Provider
        value={{
          isAuthorized,
          authorize: this.authorize,
          authorizeError,
          email,
          logout: this.logout
        }}
      >
        {children}
      </Provider>
    );
  }

  authorize = (email, password) => {
    if (email === 'stu@dent.com' && password === '123') {
      this.setState({ isAuthorized: true, authorizeError: '', email });
    } else {
      this.setState({ authorizeError: 'Email или пароль введён не верно' });
    }
  };

  logout = () => this.setState({ isAuthorized: false });

  getProviderValue = () => {
    const { isAuthorized, authorizeError, email } = this.state;
    return {
      email,
      isAuthorized,
      authorizeError,
      authorize: this.authorize,
      logout: this.logout
    };
  };
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
