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
    isAuthorized: false,
    errorMessage: 'Email или пароль введён не верно'
  };

  authorize = (email, password) => {
    const { errorMessage } = this.state;
    const isEmailValid = validData.email === email;
    const isPasswordValid = validData.password === password;

    if (isEmailValid && isPasswordValid) {
      this.setState({
        email,
        authorizeError: '',
        isAuthorized: true
      });
    } else {
      this.setState({ authorizeError: errorMessage });
    }
  };

  logout = () => this.setState({ isAuthorized: false });

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
