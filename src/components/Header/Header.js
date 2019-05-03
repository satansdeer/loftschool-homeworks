import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {({ email, isAuthorized, logout }) =>
          isAuthorized ? (
            <div className="header-menu">
              <p className="header-menu __email header-email t-header-email">
                {email}
              </p>
              <Button
                onClick={logout}
                className="header-menu__button button t-logout"
                type="button"
              >
                Выйти
              </Button>
            </div>
          ) : null
        }
      </AuthConsumer>
    );
  }
}

export default Header;
