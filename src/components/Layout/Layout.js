import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props;
    const mainClassName = `main ${header ? 'main--with-header' : ''} ${
      footer ? 'main--with-footer' : ''
    }`;

    return (
      <Fragment>
        {header && this.renderHeader(header)}

        <Main className={mainClassName}>
          <SectionTitle className="main__title" children="Main" />
          {children}
        </Main>

        {footer && this.renderFooter(footer)}
      </Fragment>
    );
  }

  renderHeader(HeaderChild) {
    return (
      <header className="header">
        <SectionTitle className="header__title">Header</SectionTitle>
        <HeaderChild />
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
}

class Main extends PureComponent {
  render() {
    const { children, className } = this.props;

    return <div className={className}>{children}</div>;
  }
}

export default Layout;
