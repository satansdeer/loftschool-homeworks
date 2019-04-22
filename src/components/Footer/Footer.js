import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

export default class Footer extends PureComponent {
  renderGuestFooter = () => {
    return 'Вы гость в этой системе';
  };

  renderAuthFooter = email => {
    return `Вы вошли как ${email}`;
  };

  render() {
    return (
      <AuthConsumer>
        {({ isAuthorized, email }) => (
          <p className="footer-message t-footer">
            {isAuthorized
              ? this.renderAuthFooter(email)
              : this.renderGuestFooter()}
          </p>
        )}
      </AuthConsumer>
    );
  }
}
