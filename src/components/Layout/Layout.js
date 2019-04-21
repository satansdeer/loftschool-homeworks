import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    return 'empty';
  }

  renderHeader = HeaderChild => {
    return HeaderChild ? (
      <header className="header">
        <SectionTitle className="header__title">Header</SectionTitle>
        <div className="header__content">{HeaderChild}</div>
      </header>
    ) : null;
  };

  renderFooter = FooterChild => {
    return FooterChild ? (
      <footer className="footer">
        <SectionTitle className="header__title">Footer</SectionTitle>
        {FooterChild}
      </footer>
    ) : null;
  };
}

export default Layout;
