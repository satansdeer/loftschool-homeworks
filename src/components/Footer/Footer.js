import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {({ isAuthorized, email, logout }) =>
          isAuthorized ? (
            <p className="t-footer">Вы вошли как {email}</p>
          ) : (
            <p className="t-footer">Вы гость в этой системе</p>
          )
        }
      </AuthConsumer>
    );
  }
}

export default Footer;
