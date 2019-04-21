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

  renderMain = () => {
    const {header, footer, children} = this.props;
    return <main className={`main ${header && 'main--with-header'} ${footer && 'main--with-footer'}`}>
      <SectionTitle className="main__title">Main</SectionTitle>
      {children}
    </main>
  }

  render() {
    return <Fragment>
      {this.renderHeader()}
      {this.renderMain()}
      {this.renderFooter()}
    </Fragment>
  }

  renderHeader = (HeaderChild) => {
    const {header} = this.props
    return header ? React.createElement(header) : null;
  }

  renderFooter = (FooterChild) => {
    const {footer} = this.props;
    return footer ? React.createElement(footer) : null;
  }
}

export default Layout;
