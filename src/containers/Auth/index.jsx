import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    authorizeError: '',
    email: '',
    isAuthorized: false
  };

  authorize = (email, password) => {
    const result = this.validate(email, password);

    result
      ? this.setState({ ...this.state, ...result })
      : this.setState({
          ...this.state,
          isAuthorized: true,
          email,
          authorizeError: ''
        });
  };

  logout = () =>
    this.setState({
      ...this.state,
      isAuthorized: false,
      email: '',
      authorizeError: ''
    });

  validate = (email, password) =>
    !email || email !== 'stu@dent.com' || !password || password !== '123'
      ? { authorizeError: 'Email или пароль введён не верно' }
      : null;

  render() {
    const { authorizeError, email, isAuthorized, logout } = this.state;
    const { children } = this.props;
    return (
      <Provider
        value={{
          authorize: this.authorize,
          logout: this.logout,
          authorizeError,
          email,
          isAuthorized
        }}
      >
        {children}
      </Provider>
    );
  }
}

export { AuthProvider, AuthConsumer };
