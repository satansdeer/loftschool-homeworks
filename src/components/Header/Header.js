import React, { Fragment, PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button';
import './Header.css';

class Header extends PureComponent {
  renderHeader = email => {
    return (
      <Fragment>
        <p className="header__title section-title">Header</p>
        <div className="header__content">
          <div className="header-menu">
            <p className="header-menu__email header-email t-header-email">
              {email}
            </p>
            <Button className="header-menu__button t-logout button">
              Выйти
            </Button>
          </div>
        </div>
      </Fragment>
    );
  };

  render() {
    return (
      <AuthConsumer>
        {({ isAuthorized, email }) => (
          <header className="header">
            {isAuthorized ? this.renderHeader(email) : null}
          </header>
        )}
      </AuthConsumer>
    );
  }
}

export default Header;
