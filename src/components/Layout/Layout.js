import React, {PureComponent} from 'react';
import './Layout.css';
import {AuthConsumer} from "../../contexts/Auth";
import Congratulations from "../Congratulations";
import LoginForm from "../LoginForm";

class Layout extends PureComponent {

    render() {
        const {header, footer, children} = this.props;

        return (
            <div>
                <AuthConsumer>
                    {({isAuthorized, authInfo}) =>
                        this.renderHeader(header, isAuthorized, authInfo)
                    }
                </AuthConsumer>
                <div className="main">
                    <AuthConsumer>
                        {({isAuthorized, authorize, authorizeError}) =>
                            isAuthorized ? (
                                <Congratulations/>
                            ) : (
                                < LoginForm
                                    authorize={authorize}
                                    authorizeError={authorizeError}
                                />
                            )
                        }
                    </AuthConsumer>
                </div>
                <AuthConsumer>
                    {({isAuthorized, authInfo}) =>
                        this.renderFooter(footer, isAuthorized, authInfo)
                    }
                </AuthConsumer>

            </div>
        )
    }

    renderHeader(HeaderChild, isAuthorized, authInfo) {
        return <HeaderChild auth={{isAuthorized, authInfo}}/>
    }

    renderFooter(FooterChild, isAuthorized, authInfo) {
        return <FooterChild auth={{isAuthorized, authInfo}}/>;
    }
}

export default Layout;
