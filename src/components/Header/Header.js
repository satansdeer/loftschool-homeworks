import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button'
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {({ email, isAuthorized, logout }) =>
          isAuthorized && (
            <div className='header-menu'>
              <p className='header-menu__email header-email t-header-email'>{email}</p>
              <Button onClick={logout}>Выйти</Button>
            </div>
          )
        }
      </AuthConsumer>
    )
  }
}

export default Header;
