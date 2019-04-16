import "./Form.css"
import React, {Component} from "react";
import bond from "./assets/bond_approve.jpg";

export default class Form extends Component {
    state = {
        firstname: '',
        lastname: '',
        password: '',
        firstnameError: '',
        lastnameError: '',
        passwordError: '',
        isLoggedId: false
    };

    formSubmit = event => {
        event.preventDefault();

        const {firstname, lastname, password} = this.state;
        let hasError = false;

        if (firstname === '') {
            this.setState({firstnameError: 'Нужно указать имя'});
            hasError = true;
        } else {
            if (firstname !== 'james') {
                this.setState({firstnameError: 'Имя указано не верно'});
                hasError = true;
            }
        }

        if (lastname === '') {
            this.setState({lastnameError: 'Нужно указать фамилию'});
            hasError = true;
        } else {
            if (lastname !== 'bond') {
                this.setState({lastnameError: 'Фамилия указана не верно'});
                hasError = true;
            }
        }

        if (password === '') {
            this.setState({passwordError: 'Нужно указать пароль'});
            hasError = true;
        } else {
            if (password !== '007') {
                this.setState({passwordError: 'Пароль указан не верно'});
                hasError = true;
            }
        }


        if (!hasError) {
            this.setState({isLoggedId: true})

        }

    }

    passwordChange = event => {
        this.setState({password: event.target.value, lastnameError: '', passwordError: '', firstnameError: ''});

    }

    firstNameChange = event => {
        this.setState({firstname: event.target.value, lastnameError: '', passwordError: '', firstnameError: ''});

    }

    lastNameChange = event => {
        this.setState({lastname: event.target.value, lastnameError: '', passwordError: '', firstnameError: ''});
    }

    render() {
        let {firstName, lastName, password} = this.state;
        return (
            <div className="app-container">
                <form className="form" onSubmit={this.formSubmit} className={this.state.isLoggedId && 'hidden'}>
                    <h1>Введите свои данные, агент</h1>
                    <p className="field">
                        <label className="field__label" htmlFor="firstname"><span
                            className="field-label">Имя</span></label>
                        <input className="field__input field-input t-input-firstname" type="text" name="firstname"
                               value={firstName} onChange={this.firstNameChange}/>
                        <span className="field__error field-error t-error-firstname">{this.state.firstnameError}</span>
                    </p>
                    <p className="field">
                        <label className="field__label" htmlFor="lastname"><span
                            className="field-label">Фамилия</span></label>
                        <input className="field__input field-input t-input-lastname" type="text" name="lastname"
                               value={lastName} onChange={this.lastNameChange}/>
                        <span className="field__error field-error t-error-lastname">{this.state.lastnameError}</span>
                    </p>
                    <p className="field">
                        <label className="field__label" htmlFor="pass"><span
                            className="field-label">Пароль</span></label>
                        <input className="field__input field-input t-input-password" type="password" name="pass"
                               value={password} onChange={this.passwordChange}/>
                        <span className="field__error field-error t-error-password">{this.state.passwordError}</span>
                    </p>
                    <div className="form__buttons">
                        <input type="submit" className="button t-submit" value="Проверить"/>
                    </div>
                </form>
                <img src={bond}
                     className={this.state.isLoggedId ? 'bond t-bond-image' : 'hidden t-bond-image'}/>
            </div>


        );
    }
}
