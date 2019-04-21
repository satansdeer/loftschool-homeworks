import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <p className="header__title section-title">Header</p>
        <div className="header__content">
          {/* <Consumer> */}
          <div className="header-menu">
            <div className="header-menu__email header-email t-header-email">
              test@test.com
            </div>
          </div>
          {/* </Consumer> */}
        </div>
        <Button />
      </header>
    );
  }
}

export default Header;
