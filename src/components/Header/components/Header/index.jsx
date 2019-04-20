import React, { memo } from 'react';
import { AuthConsumer } from '../../../../containers/Auth';
import Button from '../../../Button';
import HeaderUserBlock from '../HeaderUserBlock';
import './Header.css';

const getHeaderUserBlock = (isAuthorized, email, logout) =>
  isAuthorized && email && <HeaderUserBlock email={email} logout={logout} />;

const Header = memo(({ isAuthorized, email, logout }) => {
  return (
    <header className="header">
      <p className="header__title section-title">Header</p>
      {getHeaderUserBlock(isAuthorized, email, logout)}
    </header>
  );
});

Header.defaultProps = {
  isAuthorized: true,
  email: '12123123'
};

export default Header;
