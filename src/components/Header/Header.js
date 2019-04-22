import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button'
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <h1 className="header__title">HEADER</h1>
      </header>
    );

  }
}

export default Header;
