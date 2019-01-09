import React, { Fragment, PureComponent } from "react";
import SectionTitle from "../SectionTitle";
import "./Layout.css";

class Layout extends PureComponent {

  renderHeader = ({ header: HeaderChild }) => {
    return HeaderChild ?
      (<header className="header">
        <SectionTitle className="header__title">Header</SectionTitle>
        <div className="header__content">
          <HeaderChild/>
        </div>
      </header>)
      : null;
  };

  renderFooter = ({ footer: FooterChild }) => {
    return FooterChild ?
      (<footer className="footer">
        <SectionTitle className="footer__title">Footer</SectionTitle>
        <FooterChild/>
      </footer>)
      : null;
  };

  render() {
    return (
      <Fragment>
        {this.renderHeader(this.props)}
        <main
          className={`main ${this.props.header && "main--with-header"} ${this.props.footer && "main--with-footer"}`}>
          <SectionTitle className='main__title'>Main</SectionTitle>
          {this.props.children}
        </main>
        {this.renderFooter(this.props)}
      </Fragment>
    );
  }
}

export default Layout;