import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: '',
    isAuthorized: false,
    authorizeError: ''
  };

  authorize = (email, pass) => {
    if (email === 'stu@dent.com' && pass === '123') {
      this.setState({
        email: email,
        isAuthorized: true,
        authorizeError: ''
      });
    } else {
      this.setState({
        authorizeError: 'Email или пароль введён не верно'
      });
    }
  };

  logout = () => this.setState({ email: '', isAuthorized: false });

  getProviderValue = () => ({
    ...this.state,
    authorize: this.authorize,
    logout: this.logout
  });

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };