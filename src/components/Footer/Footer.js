import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <p className="header__title section-title">Footer</p>
        <p className="footer-message t-footer">Вы вошли как траляля@com</p>
      </footer>
    );
  }
}

export default Footer;
