import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

const validData = {
  email: 'stu@dent.com',
  password: '123'
};

class AuthProvider extends PureComponent {
  state = {
    email: '',
    authorizeError: '',
    isAuthorized: false
  };

  authorize = (email, password) => {
    const isEmailValid = validData.email === email;
    const isPasswordValid = validData.password === password;

    isEmailValid && isPasswordValid
      ? this.setState({
          email: email,
          authorizeError: '',
          isAuthorized: true
        })
      : this.setState({
          authorizeError: 'Email или пароль введён не верно'
        });
  };

  logout = () => {
    this.setState({
      isAuthorized: false
    });
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
