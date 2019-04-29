import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext(''); //Используем context - для прокидования данных (в данном случае функций) другим компонентам
class AuthProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      authorizeError: '',
      isAuthorized: false,
    };
  }

  authorize = (email, password) => {
    if (email === 'stu@dent.com' && password === '123') {
      this.setState({
        email,
        isAuthorized: true,
        authorizeError: ''
      });
    } else {
      this.setState({
        authorizeError: 'Email или пароль введён не верно'
      });
    }
  };

  logout = () => {
    this.setState({
      isAuthorized: false
    })
  };

  //Данная функция будет передана другим компонентам 
  getProviderValue = () => {
    return {
      ...this.state,
      authorize: this.authorize,
      logout: this.logout
    }
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>; //В атрибут value  передадим функцию (которую с помощью context прокинем другим компонентам)
  }
  
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
