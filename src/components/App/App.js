import React, {PureComponent} from "react";
import Layout from "../Layout";
import Footer from "../Footer";
import Header from "../Header";
import {AuthProvider} from "../../contexts/Auth";

class App extends PureComponent {
    render() {
        return (
            <AuthProvider>
                <Layout header={Header} footer={Footer}>
                </Layout>
            </AuthProvider>
        );
    }
}

export default App;
