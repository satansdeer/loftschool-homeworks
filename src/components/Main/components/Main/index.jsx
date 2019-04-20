import React, { memo } from 'react';
import './Main.css';
import LoginForm from '../../../LoginForm';
import Congratulations from '../Congratulations';

const getMainContent = (isAuthorized, authorizeError, authorize) => {
  return isAuthorized ? (
    <Congratulations />
  ) : (
    <LoginForm authorizeError={authorizeError} authorize={authorize} />
  );
};

const Main = memo(({ isAuthorized, authorizeError, authorize }) => {
  return (
    <main className="main main--with-header main--with-footer">
      <p className="main__title section-title">Main</p>
      {getMainContent(isAuthorized, authorizeError, authorize)}
    </main>
  );
});

Main.defaultProps = {
  isAuthorized: false,
  authorizeError: 'test error'
};

export default Main;
