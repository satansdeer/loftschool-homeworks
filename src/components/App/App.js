import React, { PureComponent } from "react";
import Layout from "../Layout";
import Footer from "../Footer";
import Header from "../Header";
import LoginForm from "../LoginForm";
import Congratulations from "../Congratulations";
import { AuthProvider, AuthConsumer } from "../../contexts/Auth";
import Button from "../Button";

class App extends PureComponent {
  render() {
    return (
      <AuthProvider value={{ background: "red" }}>
        <Layout header={Header} footer={Footer}>
          <AuthConsumer>
            {
              ({background}) =>{
                <button style={{background}}>333333333</button>
              }
            }
          </AuthConsumer>
        </Layout>
      </AuthProvider>
    );
  }
}

export default App;
