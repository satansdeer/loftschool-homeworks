import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

const targetValue = {
  email: 'stu@dent.com',
  password: '123'
}

class AuthProvider extends PureComponent {

  state = {
    email: '',
    authorizeError: '',
    isAuthorized: false,
  }

  authorize = (email, password) => {
    if (email === targetValue.email && password === targetValue.password) {
      this.setState({ email, isAuthorized: true, authorizeError: '' });
    } else {
      this.setState({ authorizeError: 'Логин или пароль введены не верно' });
    }
  }

  logout = () => {
    this.setState({ emial: '',authorizeError: '', isAuthorized: false })
  }

  getProviderValue = () => {
    let { email, authorizeError, isAuthorized } = this.state;

    return {
      email,
      authorizeError,
      isAuthorized,
      authorize: this.authorize,
      logout: this.logout
    }
  }

  render() {
    const { children } = this.props;

    return (
      <Provider value={this.getProviderValue()}>
        {children}
      </Provider>
    )
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
