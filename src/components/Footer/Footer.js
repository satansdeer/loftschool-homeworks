import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    const { FooterChild } = this.props;

    return (
      <AuthConsumer>
        {({ isAuthorized, email }) => {
          return (
            <div className="footer">
              {FooterChild}
              <p className="footer-message t-footer">
                {isAuthorized
                  ? `Вы вошли как ${email}`
                  : 'Вы гость в этой системе'}
              </p>
            </div>
          );
        }}
      </AuthConsumer>
    );
  }
}

export default Footer;
