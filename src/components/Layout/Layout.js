import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { footer, header, children } = this.props;

    let styleMain = ['main'];

    if (header) {
      styleMain.push('main--with-header');
    }

    if (footer) {
      styleMain.push('main--with-footer');
    }

    return (
      <Fragment>
        {this.renderHeader(header)}
        <main className={styleMain.join(' ')}>
          <p className="main__title section-title">Main</p>
          {children}
        </main>
        {this.renderFooter(footer)}
      </Fragment>
    );
  }

  renderHeader(HeaderChild) {
    if (!HeaderChild) {
      return undefined;
    }

    return (
      <header className="header">
        <p className="header__title section-title">Header</p>
        <div className="header__content">
          <HeaderChild />
        </div>
      </header>
    );
  }

  renderFooter(FooterChild) {
    if (!FooterChild) {
      return undefined;
    }

    return (
      <footer className="footer">
        <p className="header__title section-title">Footer</p>
        <FooterChild />
      </footer>
    );
  }
}

export default Layout;
