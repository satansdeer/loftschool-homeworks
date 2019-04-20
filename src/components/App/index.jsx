import React, { memo } from 'react';
import Footer from '../Footer/components/Footer';
import Header from '../Header/components/Header';
import Main from '../Main/components/Main';
import { AuthProvider, AuthConsumer } from '../../containers/Auth';
import { WithAuth } from '../../containers/WithAuth';

const App = memo(() => (
  <AuthProvider>
    <WithAuth>
      <Header />
      <Main />
      <Footer />
    </WithAuth>
  </AuthProvider>
));

export default App;
