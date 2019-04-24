import React, { PureComponent } from 'react';
import Layout from '../Layout';
import Footer from '../Footer';
import Header from '../Header';
import LoginForm from '../LoginForm';
import Congratulations from '../Congratulations';
import { AuthProvider, AuthConsumer } from '../../contexts/Auth';

class App extends PureComponent {
  render() {
    return (
      //Для доступа к context обвернем все компоненты в компонент в котором содержиться context
      <AuthProvider>
        <Layout header={Header} footer={Footer}>
          {/*С помощью Consumer получаем данные которые передали в компоненте Auth в Provider (атрибут value)*/}
          <AuthConsumer>
            {({ isAuthorized, authorize, authorizeError }) =>
              isAuthorized ? (
                <Congratulations />
              ) : (
                <LoginForm authorize={authorize} authorizeError={authorizeError} /> //Через атрибуты указываем данные которые будут доступны через this.props
              )}
          </AuthConsumer>
        </Layout>
      </AuthProvider>
    );
  }
}

export default App;
