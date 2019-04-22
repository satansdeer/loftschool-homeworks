import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  static propTypes = {
    header: PropTypes.func,
    footer: PropTypes.func,
  }

  static defautProps = {
    header: undefined,
    footer: undefined,
  }

  renderMain = (mainClassName) => {
    const {children} = this.props;
    return <main className={mainClassName}>
      <SectionTitle className="main__title">Main</SectionTitle>
      {children}
    </main>
  }

  render() {
    const {header, footer} = this.props;
    const mainClassName = `main ${header && 'main--with-header'} ${footer && 'main--with-footer'}`;

    return <Fragment>
      {this.renderHeader(header)}
      {this.renderMain(mainClassName)}
      {this.renderFooter(footer)}
    </Fragment>
  }

  renderHeader = (HeaderChild) => {
    return HeaderChild ? (
      <header className="header">
        <SectionTitle className="header__title section-title">Header</SectionTitle>
        <div className="header__content">{HeaderChild}</div>
      </header>
    ) : null;
  }

  renderFooter = (FooterChild) => {
    return FooterChild ? (
      <footer className="footer">
        <SectionTitle className="header__title section-title">Footer</SectionTitle>
          {FooterChild}
        </footer>
    ) : null;
  }
}

export default Layout;
