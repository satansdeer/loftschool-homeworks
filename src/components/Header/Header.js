import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import SectionTitle  from '../SectionTitle';
import Button from '../Button';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <SectionTitle className ='header__title'>header</SectionTitle>
        <div className="header__content">
        <AuthConsumer/>
        </div>
      </header>
    )
  }
}

export default Header;
