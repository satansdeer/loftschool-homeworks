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

  handleLogout = () => {
    this.setState({ isAuthorized: false });
  };

  render() {
    const { children } = this.props;
    const { email, isAuthorized, authorizeError } = this.state;

    return (
      <Provider
        // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
        value={{
          email,
          isAuthorized,
          authorizeError,
          authorize: this.authorize,
          logout: this.handleLogout
        }}
      >
        {children}
      </Provider>
    );
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
