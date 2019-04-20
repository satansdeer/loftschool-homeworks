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
        <header className="header">
          <SectionTitle className="header__title">Header</SectionTitle>
          {new header().render()}
        </header>
        <main className={`main ${headerClass} ${footerClass}`}>
          <p className="main__title section-title">Main</p>
          {children}
        </main>
        <footer className="footer">
          <SectionTitle className="header__title">Footer</SectionTitle>
          {new footer().render()}
        </footer>
      </Fragment>
    );
  }
}

export default Layout;
