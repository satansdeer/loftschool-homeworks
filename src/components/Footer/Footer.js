import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  renderGuest = () => {
    return 'Вы гость в этой системе';
  }

  renderUser = (email) => {
    return `Вы вошли как ${email}`;
  }

  render() {
    return <AuthConsumer>
        {({isAuthorized, email}) => <footer className="footer">
        <p className="header__title section-title">Footer</p><p className="footer-message t-footer">
          {isAuthorized ? this.renderUser(email) : this.renderGuest()}
        </p></footer>}
      </AuthConsumer>
  }
}

export default Footer;
