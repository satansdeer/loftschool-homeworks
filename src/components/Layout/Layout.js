import React, { PureComponent } from 'react';
// import SectionTitle from '../SectionTitle';
import './Layout.css';
// import Button from '../Button';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Layout extends PureComponent {
  // state = this.context

  // constructor(props){
  //   super(props);
    
  //   // state = this.context.state;
  //   // console.log('State', this.state.context);  
  // }
  render() {    
    
    console.log('ProvState', this.props.value);
    return (

      <div>
        
        {this.renderHeader()}
        <main className="main">          
          {this.props.children}
        </main>
        {this.renderFooter()}
      </div>
    );
  }

  componentDidUpdate(){
    console.log(this.props);
  }

  renderHeader(HeaderChild) {    
    console.log('HeaderInfo', HeaderChild);
    return <Header />;
  }

  renderFooter(FooterChild) {
    console.log('FooterInfo', FooterChild);
    return <Footer/>;
  }
}

export default Layout;
