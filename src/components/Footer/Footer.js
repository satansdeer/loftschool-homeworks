import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  state = this.state;
  render() {
    // console.log('StateInFooter', this.getInfo());
    return (
      <footer className="footer">
        <p className="header__title section-title">Footer</p>          
          <p className="footer-message t-footer"></p>    
      </footer>
    );
  }
}

export default Footer;
