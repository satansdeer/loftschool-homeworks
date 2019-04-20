import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button';
import './Header.css';

class Header extends PureComponent {
  render() {
    const { children } = this.props;
    return <header className="header">{children}</header>;
  }
}

export default Header;
