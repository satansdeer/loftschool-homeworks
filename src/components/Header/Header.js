import React, {PureComponent} from 'react';
import {AuthConsumer} from '../../contexts/Auth';
import Button from '../Button'
import './Header.css';

class Header extends PureComponent {
    render() {
        const {authInfo} = this.props.auth;
        return (
            <header className="header">
                <h1 className="header__title">HEADER</h1>
                {
                    authInfo.isAuthorized ?
                        <div className="header-menu">
                            <p className="header-menu__email header-email t-header-email">{authInfo.authInfo.email}</p>
                            <button className="header-menu__button t-logout button">Выйти</button>
                        </div>
                        :
                        <div></div>
                }
            </header>
        );
    }
}

export default Header;
