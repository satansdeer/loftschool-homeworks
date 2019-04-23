import React, { PureComponent } from 'react';
// import SectionTitle from '../SectionTitle';
import './Layout.css';
// import Button from '../Button';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Layout extends PureComponent {
  render() {    
    const {header, footer, children, layout} = this.props;
    
    console.log('ProvState', this.props.value);
    return (

      <div>
        
        {this.renderHeader(header)}
        <main className="main">          
          {this.props.children}
        </main>
        {this.renderFooter(footer)}
      </div>
    );
  }

  renderHeader(HeaderChild) {    
    return <HeaderChild/>    
  }

  renderFooter(FooterChild) {    
    return <FooterChild/>;
  }
}

export default Layout;
