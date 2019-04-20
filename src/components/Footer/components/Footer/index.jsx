import React, { memo } from 'react';
import FooterUserBlock from '../FooterUserBlock';
import './Footer.css';

const getFooterUserBlock = (isAuthorized, email) =>
  isAuthorized && email ? (
    <FooterUserBlock email={email} />
  ) : (
    <p className="footer-message t-footer">Вы гость в этой системе</p>
  );

const Footer = memo(({ isAuthorized, email }) => {
  return (
    <footer className="footer">
      <p className="header__title section-title">Footer</p>
      {getFooterUserBlock(isAuthorized, email)}
    </footer>
  );
});

Footer.defaultProps = {
  isAuthorized: true,
  email: '12123123'
};

export default Footer;
