import React, { Component } from 'react';
import Image from './assets/bond_approve.jpg';
import './Form.css';

const data = {
    firstName: 'james',
    lastName: 'bond',
    password: '007',
    errors: {
        firstNameIncorrect: 'Имя указано не верно',
        lastNameIncorrect: 'Фамилия указана не верно',
        passwordIncorrect: 'Пароль указан не верно',
        firstNameEmpty: 'Нужно указать имя',
        lastNameEmpty: 'Нужно указать фамилию',
        passwordEmpty: 'Нужно указать пароль'
    }
};

class Form extends Component {
    state = { firstName: '', lastName: '', password: '',
              firstNameErr: '', lastNameErr: '', passwordErr: '',
              isValid : false };
    
    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            firstNameErr: !this.state.firstName ?
                data.errors.firstNameEmpty
                :
                (this.state.firstName.toLowerCase() !== data.firstName ? data.errors.firstNameIncorrect : ''),
             
            lastNameErr: (!this.state.lastName ?
                data.errors.lastNameEmpty
                :
                (this.state.lastName.toLowerCase() !== data.lastName ? data.errors.lastNameIncorrect : '')),

            passwordErr: (!this.state.password ?
                data.errors.passwordEmpty
                :
                (this.state.password.toLowerCase() !== data.password ? data.errors.passwordIncorrect : '')),

            isValid: (this.state.firstName.toLowerCase() === data.firstName &&
                this.state.lastName.toLowerCase() === data.lastName &&
                this.state.password.toLowerCase() === data.password)
        });
    }; 

    firstNameChanged = (event) => {
        this.setState({ firstName: event.target.value });    
        this.emptyErrors();     
    };

    lastNameChanged = (event) => {
        this.setState({ lastName: event.target.value });
        this.emptyErrors();    
    };

    passwordChanged = (event) => {
        this.setState({ password: event.target.value });
        this.emptyErrors();    
    };

    emptyErrors = () => {
        this.setState({ firstNameErr: '', lastNameErr: '', passwordErr: '' });
    }

    render() {
        const { firstName, lastName, password, firstNameErr, lastNameErr, passwordErr, isValid } = this.state;

        return (                        
            isValid ?
                <div className="app-container"><img className="t-bond-image" alt="Bond" src={Image} /></div>
                :
                <div className="app-container">
                    <form className="form" onSubmit={this.handleSubmit} >
                        <h1>Введите свои данные, агент</h1>
                        <p className="field">
                            <label className="field__label" htmlFor="firstname">
                                <span className="field-label">Имя</span>
                            </label>
                            <input className="field__input field-input t-input-firstname" type="text" name="firstname" value={firstName} onChange={this.firstNameChanged} />
                            <span className="field__error field-error t-error-firstname">{firstNameErr}</span>
                        </p>
                        <p className="field">
                            <label className="field__label" htmlFor="lastname">
                                <span className="field-label">Фамилия</span>
                            </label>
                            <input className="field__input field-input t-input-lastname" type="text" name="lastname" value={lastName} onChange={this.lastNameChanged} />
                            <span className="field__error field-error t-error-lastname">{lastNameErr}</span>
                        </p>
                        <p className="field">
                            <label className="field__label" htmlFor="password">
                                <span className="field-label">Пароль</span>
                            </label>
                            <input className="field__input field-input t-input-password" type="password" name="password" value={password} onChange={this.passwordChanged} />
                            <span className="field__error field-error t-error-password">{passwordErr}</span>
                        </p>
                        <div className="form__buttons">
                            <input type="submit" className="button t-submit" value="Проверить"/>
                        </div>
                    </form>                
                </div>
        );
    }
}

export default Form;