import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    isAuthorized: false,
    authorizeError: '',
    authedEmail: '',
    authorize: (email, password) => {
      if (email !== 'stu@dent.com' || password !== '123') {
        this.setState({ authorizeError: 'Email или пароль введён не верно' });
      } else {
        this.setState({
          authorizeError: '',
          isAuthorized: true,
          authedEmail: email
        });
      }
    },
    logout: () => {
      this.setState({ isAuthorized: false });
    }
  };
  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
