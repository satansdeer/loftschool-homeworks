import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';
import Button from '../Button';

const Au = ({ children }) => <div>{children}</div>

class Layout extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.children}                
      </div>
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
