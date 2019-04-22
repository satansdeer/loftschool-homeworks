import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: '',
    authorizeError: '',
    isAuthorized: false
  };

  authorize = (email, password) => {
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
  };

  logout = () => {
    this.setState({
      isAuthorized: false
    });
  };

  getProviderValue = () => {
    return Object.assign({}, this.state, {
      authorize: this.authorize,
      logout: this.logout
    });
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
