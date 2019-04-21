import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props;
    console.log(footer);
    return (
      <Fragment>
        {header && this.renderHeader(header)}
        <div className="main">
          <div className="main--with-header main--with-footer">
            <div className="main__title section-title">main</div>
            {children}
          </div>
        </div>

        {footer && this.renderFooter(footer)}
      </Fragment>
    );
  }

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
        <SectionTitle className="footer__title">footer</SectionTitle>
        <div className="footer-message">
          <FooterChild />
        </div>
      </footer>
    );
  }
}

export default Layout;
