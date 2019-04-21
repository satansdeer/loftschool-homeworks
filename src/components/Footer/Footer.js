import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {({ isAuth, email }) =>
          isAuth ? (
            <p className="footer-message t-footer">{email}</p>
          ) : (
            <p className="footer-message t-footer">Вы гость в этой системе.</p>
          )
        }
      </AuthConsumer>
    );
  }
}

export default Footer;
