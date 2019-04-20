import React, { Fragment, Component } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends Component {
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

  getFullClassName = () => {
    const { footer, header } = this.props;

    let styleMain = ['main'];

    if (header) {
      styleMain.push('main--with-header');
    }

    if (footer) {
      styleMain.push('main--with-footer');
    }

    return styleMain.join(' ');
  };

  render() {
    const { footer, header, children } = this.props;

    return (
      <Fragment>
        {this.renderHeader(header)}
        <main className={this.getFullClassName()}>
          <p className="main__title section-title">Main</p>
          {children}
        </main>
        {this.renderFooter(footer)}
      </Fragment>
    );
  }
}

export default Layout;
