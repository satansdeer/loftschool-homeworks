import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext({background:"green"});

class AuthProvider extends PureComponent {
  render() {
    const { children } = this.props;
    return <Provider>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
