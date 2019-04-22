import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button';
import './Header.css';

class Header extends PureComponent {
  renderAuthHeader = (email, logout) => {
    return (
        <div className="header-menu">
          <p className="header-menu__email header-email t-header-email">
            {email}
          </p>
          <Button className="header-menu__button t-logout button" onClick={logout} type="button">Выйти</Button>
        </div>
    );
  };

  render() {
    return (
      <AuthConsumer>
        {({ isAuthorized, email, logout }) => isAuthorized ? this.renderAuthHeader(email, logout) : null }
      </AuthConsumer>
    );
  }
}

export default Header;
