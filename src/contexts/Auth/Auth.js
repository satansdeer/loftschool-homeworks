import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  //Вывести функции из стейта, и выводить объект через getprovidevalue
  //Вывести эррор
  state = {
    isAuthorized: false,
    authorizeError: '',
    email: ''
  };
  authorize = (email, password) => {
    if (email !== 'stu@dent.com' || password !== '123') {
      this.setState({ authorizeError: 'Email или пароль введён не верно' });
    } else {
      this.setState({
        authorizeError: '',
        isAuthorized: true,
        email: email
      });
    }
  };
  logout = () => {
    this.setState({ isAuthorized: false });
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
