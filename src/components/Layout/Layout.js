import React, { Fragment, PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import SectionTitle from '../SectionTitle';
import Header from '../Header';
import Footer from '../Footer';

import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div style={{ height: '100%' }}>
        <AuthConsumer>
          {state => {
            console.log(state);
            return state.isAuthorized
              ? this.renderHeader(this.renderHeaderMenu(state))
              : this.renderHeader('');
          }}
        </AuthConsumer>
        <main className="main main--with-header main--with-footer">
          <p className="main__title section-title">Main</p>
          {children}
        </main>
        <AuthConsumer>
          {state => {
            return state.isAuthorized
              ? this.renderFooter(`Вы вошли как ${state.authedEmail}`)
              : this.renderFooter('Вы гость в этой системе ');
          }}
        </AuthConsumer>
      </div>
    );
  }

  renderHeaderMenu(state) {
    return (
      <div className="header-menu">
        <p className="header-menu__email header-email t-header-email">
          {state.authedEmail}
        </p>
        <button
          className="header-menu__button t-logout button"
          onClick={state.logout}
        >
          Выйти
        </button>
      </div>
    );
  }

  renderHeader(HeaderChild) {
    return (
      <Header>
        <SectionTitle className="header__title">HEADER</SectionTitle>
        <div className="header__content">{HeaderChild}</div>
      </Header>
    );
  }

  renderFooter(FooterChild) {
    return (
      <Footer>
        <SectionTitle className="header__title">FOOTER</SectionTitle>
        <p className="footer-message t-footer">{FooterChild}</p>
      </Footer>
    );
  }
}

export default Layout;
