import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <main className="main main--with-header main--with-footer">>
        <SectionTitle className="mail__title">main</SectionTitle>
        {children}
      </main>
    );
  }


  renderHeader(HeaderChild) {
    return 'empty';
  }

  renderFooter(FooterChild) {
    return 'empty';
  }
}

export default Layout;
