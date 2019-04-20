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
        <SectionTitle className="header__title">Footer</SectionTitle>
        <FooterChild />
      </footer>
    );
  }

  render() {
    const { header, footer, children } = this.props;
    const withHeader = header ? 'main--with-header' : '';
    const withFooter = footer ? 'main--with-footer' : '';
    return (
      <Fragment>
        {header && this.renderHeader(header)}
        <main className={`main ${withHeader} ${withFooter}`}>
          <SectionTitle className="main__title">Main</SectionTitle>
          {children}
        </main>
        {footer && this.renderFooter(footer)}
      </Fragment>
    );
  }
}

export default Layout;
