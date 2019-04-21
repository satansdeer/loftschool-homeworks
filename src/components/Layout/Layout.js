import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  renderHeader(HeaderChild) {
    return (
      <header className="header">
        <SectionTitle className="header__title">Header</SectionTitle>
        <div className="header__content">
          <HeaderChild />
        </div>
      </header>
    );
  }

  renderFooter(FooterChild) {
    return (
      <footer className="footer">
        <SectionTitle className="footer__title">Footer</SectionTitle>
        <div className="footer-message">
          <FooterChild />
        </div>
      </footer>
    );
  }

  render() {
    const { header, footer, children } = this.props;
    const mainWithHeader = header ? 'main--with-header' : '';
    const mainWithFooter = footer ? 'main--with-footer' : '';
    return (
      <Fragment>
        {header}
        <main className={`main ${mainWithHeader} ${mainWithFooter}`}>
          <SectionTitle className="header__title section-title">
            Main
          </SectionTitle>
          {children}
        </main>
        {footer}
      </Fragment>
    );
  }
}

export default Layout;
