import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import SectionTitle  from '../SectionTitle';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <SectionTitle className ='header__title'>footer</SectionTitle>
        <AuthConsumer>
          <p className="footer-message t-footer">Вы гость в этой системе</p>
        </AuthConsumer>
      </footer>
    )
  }
}

export default Footer;
