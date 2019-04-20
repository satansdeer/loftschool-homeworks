import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    const { children } = this.props;
    return <footer className="footer">{children}</footer>;
  }
}

export default Footer;
