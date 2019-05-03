import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props;
    const mainClassName = `main ${header ? 'main--with-header' : ''} ${
      footer ? 'main--with-footer' : ''
    }`;
    const HeaderComponent = this.renderHeader(
      <SectionTitle className="header__title" children="Header" />
    );
    const FooterComponent = this.renderFooter(
      <SectionTitle className="footer__title" children="Footer" />
    );

    return (
      <Fragment>
        {HeaderComponent}
        <Main className={mainClassName}>
          <SectionTitle className="main__title" children="Main" />
          {children}
        </Main>
        {FooterComponent}
      </Fragment>
    );
  }

  renderHeader(HeaderChild) {
    const { header } = this.props;

    if (!header) return null;

    const Header = header;

    return <Header HeaderChild={HeaderChild} />;
  }

  renderFooter(FooterChild) {
    const { footer } = this.props;

    if (!footer) return null;

    const Footer = footer;

    return <Footer FooterChild={FooterChild} />;
  }
}

class Main extends PureComponent {
  render() {
    const { children, className } = this.props;

    return <div className={className}>{children}</div>;
  }
}

export default Layout;
