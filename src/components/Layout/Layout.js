import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    return (
      <SectionTitle className="header__title section-title">
        Header
      </SectionTitle>
    );
  }

  renderHeader(HeaderChild) {
    return (
      <Fragment>
        <SectionTitle className="header__title section-title">
          Main
        </SectionTitle>
      </Fragment>
    );
  }

  renderFooter(FooterChild) {
    return (
      <SectionTitle className="header__title section-title">
        Footer
      </SectionTitle>
    );
  }
}

export default Layout;
