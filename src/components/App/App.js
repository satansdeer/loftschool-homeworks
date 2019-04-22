import React, { PureComponent } from "react";
import Layout from "../Layout";
import Footer from "../Footer";
import Header from "../Header";
import LoginForm from "../LoginForm";
import Congratulations from "../Congratulations";
import { AuthProvider, AuthConsumer } from "../../contexts/Auth";
// import Button from "../Button";

class App extends PureComponent {
  render() {
    return (
      <AuthProvider>
        <Layout header={Header} footer={Footer}>
          <AuthConsumer>
            {({ isAuthorized, authorize, authorizeError }) =>
              isAuthorized ? (
                <Congratulations />
              ) : (
                  < LoginForm
                    authorize={authorize}
                    authorizeError={authorizeError}
                  />
                )
            }
            {/* {
              ({background, logout}) =>{
                console.log('E', background);
                return (<button style={{...background}} onClick={logout}>Test</button>);
              }
            } */}
          </AuthConsumer>
        </Layout>
      </AuthProvider>
    );
  }
}

export default App;
