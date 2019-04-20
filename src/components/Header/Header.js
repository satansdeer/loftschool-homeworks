import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {({ email, isAuthorized, logout }) =>
          isAuthorized === true && (
            <div className="header-menu">
              <p className="header-menu__email header-email t-header-email">
                {email}
              </p>
              <button
                className="header-menu__button t-logout button"
                onClick={logout}
              >
                Выйти
              </button>
            </div>
          )
        }
      </AuthConsumer>
    );
  }
}

export default Header;
