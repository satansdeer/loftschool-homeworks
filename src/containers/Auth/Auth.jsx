import React, { PureComponent, Component, createContext } from 'react';
import { VALID_PASSWORD, VALID_EMAIL } from './constants';
const { Provider, Consumer } = createContext('');

class AuthProvider extends PureComponent {
  state = {
    isAuthorized: false,
    authError: null,
    email: '',
    password: ''
  };

  authorize = () => {
    const { email, password } = this.state;

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      this.setState({ isAuthorized: true, authError: null });
    } else {
      this.setState({ authError: 'Почта или пароль не верные' });
    }
  };

  changeEmail = email => {
    this.setState({ ...this.state, email });
  };

  changePassword = password => {
    this.setState({ ...this.state, password });
  };

  getProviderValue = () => {
    const { isAuthorized, authError } = this.state;
    return {
      isAuthorized,
      authorize: this.authorize,
      authError,
      changeEmail: this.changeEmail,
      changePassword: this.changePassword
    };
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const withAuth = WrappedComponent => {
  class AuthHOC extends Component {
    render() {
      const { ...rest } = this.props;
      return (
        <Consumer>
          {containersProps => (
            <WrappedComponent {...containersProps} {...rest} />
          )}
        </Consumer>
      );
    }
  }

  return AuthHOC;
};

export { AuthProvider, withAuth };
