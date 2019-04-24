import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {

  render() {
    const {authInfo} = this.props.auth;
    console.log('AuthInfoInHeader', authInfo);

    return (
      <footer className="footer">
        <p className="header__title section-title">Footer</p>          
          <p className="footer-message t-footer"></p>
        {
          authInfo.isAuthorized ?
              <p className="footer-message t-footer">
                Вы вошли как {authInfo.authInfo.email}
              </p>
              : <p></p>
        }
      </footer>
    );
  }
}

export default Footer;
