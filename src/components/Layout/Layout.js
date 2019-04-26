import React, { PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props;
    //console.log({ header, footer, children });
    return (
      <React.Fragment>
        { header && this.renderHeader(header) }
        <main className="main main--with-header main--with-footer">
          <div className="main__title section-title">Main</div>
          { children }
        </main>
        { footer && this.renderFooter(footer) }
      </React.Fragment>
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
        <SectionTitle className="footer__title">Footer</SectionTitle>
        <div className="footer-message">
          <FooterChild />
        </div>
      </footer>
    );
  }
}

export default Layout;
