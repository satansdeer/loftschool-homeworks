import React, { PureComponent } from "react";

const { Provider, Consumer: AuthConsumer } = React.createContext("");

const validData = {
  email: "stu@dent.com",
  password: "123",
  errorMessage: "Email или пароль введён не верно"
};

class AuthProvider extends PureComponent {

  state = {
    email: "",
    authorizeError: "",
    isAuthorized: false
  };

  authorize = (email, pass) => {
    const isEmail = email.length && validData.email === email;
    const isPassword = pass.length && validData.password === pass;
    if (isEmail && isPassword) {
      this.setState({ authorizeError: "", isAuthorized: true, email });
      return;
    }
    this.setState({ authorizeError: validData.errorMessage });
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
    return <Provider value={this.getProviderValue()}>
      {children}
    </Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };