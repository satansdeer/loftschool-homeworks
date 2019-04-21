import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props;
    const headerClass = header ? 'main--with-header' : '';
    const footerClass = footer ? 'main--with-footer' : '';
    return (
      <Fragment>
        {this.renderHeader(header)}
        <main className={`main ${headerClass} ${footerClass}`}>
          <p className="main__title section-title">Main</p>
          {children}
        </main>
        {this.renderFooter(footer)}
      </Fragment>
    );
  }

  renderHeader = HeaderChild => {
    return HeaderChild ? (
      <header className="header">
        <SectionTitle className="header__title">Header</SectionTitle>
        <div className="header__content">
          <HeaderChild />
        </div>
      </header>
    ) : null;
  };

  renderFooter = FooterChild => {
    return FooterChild ? (
      <footer className="footer">
        <SectionTitle className="footer__title">Footer</SectionTitle>
        <FooterChild />
      </footer>
    ) : null;
  };
}

export default Layout;
