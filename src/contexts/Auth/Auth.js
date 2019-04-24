import React, {PureComponent} from 'react';

const {Provider, Consumer: AuthConsumer} = React.createContext('');

class AuthProvider extends PureComponent {
    state = {isAuthorized: false, authorize: null, authorizeError: '', authInfo: {email: '', password: ''}}
    logout = () => {
        console.log('I am logout');
        this.logout();
    };
    authorize = (email, password) => {
        if (email === 'stu@dent.com' && password === '123') {
            this.setState({isAuthorized: true, authorizeError: '', authInfo: {email: email, password: password}});
        } else {
            this.setState({authorizeError: 'Email или пароль введён не верно', isAuthorized: false});
        }
    };
    getProviderValue = () => {
        this.setState(this.state);
        console.log('StateInProvider', this.state);
        return {
            logout: this.logout, authorize: this.authorize, isAuthorized: this.state.isAuthorized,
            authorizeError: this.state.authorizeError, authInfo: this.state
        };
    };

    render() {
        const {children} = this.props;
        return <Provider value={this.getProviderValue()}>
            {children}</Provider>;
    }
}

const TestProvider = Provider;

export {AuthProvider, AuthConsumer, TestProvider};
