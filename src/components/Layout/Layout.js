import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    return (
      <Fragment>
        <SectionTitle className="header__title section-title">
          Header
        </SectionTitle>
      </Fragment>
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
      <Fragment>
        <SectionTitle className="header__title section-title">
          Footer
        </SectionTitle>
      </Fragment>
    );
  }
}

export default Layout;
